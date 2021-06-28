import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './linechart.css';



class LineChart extends Component {
       state = {
        labels: [],
        data:[],
        type:"unknown"
       
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        
        return {
         labels: nextProps.labels,
         data: nextProps.data,
         type: nextProps.type
        };
    }

    render() { 
        var stat = {
            labels: this.state.labels,
            datasets: [
              {
                label: this.state.type,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.state.data
              }
            ]
          }
        return ( 

            <div className="linechart">
                    <Line
                    data={stat}
                    options={{
                        title:{
                        display:true,
                        text:'Corona cases',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
            </div>

         );
    }
}
 
export default LineChart;