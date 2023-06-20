import ReactApexChart from 'react-apexcharts';
import data from "../../data/data.json"
import {useState, useEffect} from 'react'
import "./styles.css"

export const Chart = () => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData(data)
    }, [])

    const options = {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: chartData.map((item) => item.day)
        },
        labels: {
            style: {
                fontFamily: 'DM Sans'
            }
        },
        series: [
          {
            name: 'Amount',
            data: chartData.map((item) => item.amount)
          }
        ],
        grid:
            {
                show: false
            },
        yaxis:
        {
            show: false
        },
        plotOptions:
        {
            bar:
            {
                borderRadius: 5
            }
        }
    }
          
    return (
        <div className="chart-container">
            <ReactApexChart 
            options={options} 
            series={options.series}   
            type='bar'
            height={200}
            width={400}
            />
        </div>
    )
}