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
                fill: true,
                lineTension:0.5,
                backgroundColor: 'rgba(0,200,200,0.5)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 1,
                data: this.state.data,
                color:'#ff0000'
              }
            ]
          }
        return ( 

            <div className="linechart">
                    <Line
                    data={stat}
                    options={{
                        responsive:true
                    }}
                    />
            </div>

         );
    }
}
 
export default LineChart;