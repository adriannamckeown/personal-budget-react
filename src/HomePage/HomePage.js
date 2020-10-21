import React, { useEffect, useState } from "react";
import axios from "axios";
import D3Chart from "../D3Chart/D3Chart";

function HomePage() {
    const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/budget',
      );
      console.log(result.data.myBudget);
      setData(result.data.myBudget);
   };
   fetchData();
  }, []);

  return (
<main class="center" id="main">

    <div class="page-area">

        <article>
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </article>

        <article>
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h1>ChartJS Pie Chart</h1>
            <p>
            <canvas id="myChart" width="300" height="300"/>
            </p>
        </article>

        <article>
            <h1>D3 Pie Chart</h1>
                <D3Chart
                data={data}
                width={300}
                height={300}
                innerRadius={100}
                outerRadius={200}
                />
         </article>
       </div>
    </main>
  );
}

export default HomePage;