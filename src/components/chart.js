import React, { Component } from 'react';
import Chart from "react-google-charts";

class Charts extends Component {
    state = { 
        data:[],
        pieCountry:"",
        pieConfirmed:0,
        pieDeaths:0,
        pieRecovered:5
     }

     static getDerivedStateFromProps(nextProps, prevState) {
        
        return {
         pieCountry: nextProps.country,
         pieConfirmed: nextProps.confirmed,
         pieDeaths: nextProps.death,
         pieRecovered: nextProps.recovered
        };
    }


    render() { 
        return ( 
            <div>

                <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Type', 'Ratio'],
                    ['Confirmed', this.state.pieConfirmed],
                    ['Deaths', this.state.pieDeaths],
                    ['Recovered', this.state.pieRecovered]
                ]}
                options={{
                    title: 'Country :' + this.state.pieCountry,
                }}
                rootProps={{ 'data-testid': '1' }}
                />
                
            </div>
         );
    }
}
 
export default Charts;