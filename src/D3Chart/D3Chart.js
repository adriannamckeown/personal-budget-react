import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


  const D3Chart = props => {
    const ref = useRef(null);
    const createPie = d3
      .pie()
      .value(d => d.budget)
      .sort(null);
    const d3Arc = d3
      .arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const format = d3.format(".2f");
  
     useEffect(() => {
        const data = createPie(props.data);
        console.log();
        const group = d3.select(ref.current);
        const dataGroup = group.selectAll("g.arc").data(data);
  
        dataGroup.exit().remove();
  
        const update = dataGroup
          .enter()
          .append("g")
          .attr("class", "arc");
  
        const path = update
          .append("path")
          .merge(dataGroup.select("path.arc"));
  
        path
          .attr("class", "arc")
          .attr("d", d3Arc)
          .attr("fill", (d, i) => colors(i));
  
        const text = update
          .append("text")
          .merge(dataGroup.select("text"));
  
        text
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("transform", d => `translate(${d3Arc.centroid(d)})`)
          .style("fill", "white")
          .style("font-size", 10)
          .text(d => format(d.value));
      },
      [colors, d3Arc, createPie, format, props.data]
      
    );
  
    return (
      <svg width={props.width} height={props.height}>
        <g
          ref={ref}
          transform={`translate(${props.outerRadius} ${props.outerRadius})`}
        />
      </svg>
    );
  };

  export default D3Chart;