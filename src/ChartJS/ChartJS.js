  
import Chart from "chart.js";
import axios from "axios";

export const ChartJS = () => {

    var labels = [];
    var values = [];
    var data = {};
    var dataSource = {
        datasets: [{
          data: [],
          backgroundColor: [
              '#fffb87',
              '#ffa1e1',
              '#a3fff7',
              '#ffc66b',
              '#be9eff',
              '#aafaa0',
              '#ff4d4d'
              ],
            }],
          labels: []
      };

      function createChartJS() {
        var ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
            type: 'pie',
            data: dataSource
        });
      };

      function getBudgetData() {
        axios.get('http://localhost:3000/budget').then(function(res)
        {
            for (var i = 0; i < res.data.myBudget.length; i++){
              values.push(res.data.myBudget[i].budget);
              labels.push(res.data.myBudget[i].label);
              data[String(res.data.myBudget[i].label)] = res.data.myBudget[i].budget;
              dataSource.datasets[0].data.push(res.data.myBudget[i].budget);
              dataSource.labels.push(res.data.myBudget[i].label);
          }
          createChartJS();
    });
   };
   getBudgetData();
   return null;
};

export default ChartJS;