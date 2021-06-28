import React, { Component } from 'react';
import LineChart from './lineChart';
import Summary from './summary';
import './country.css';

class Country extends Component {
    state = { 
        country:"",
        allData:[],
        stotal:0,
        srecovered:0,
        sdeaths:0,
        confirmed: {
            labels:[],
            data:[]
        },
        recovered: {
            labels:[],
            data:[]
        },
        deaths: {
            labels:[],
            data:[]
        },
        active: {
            labels:[],
            data:[]
        }
     }

     componentDidMount=()=>{
         this.countryHandle(this.props.country)
     }
     componentDidUpdate=()=>{
         if(this.state.country!==this.props.country){
             this.countryHandle(this.props.country)
         }
     }
     
     countryHandle=(count)=>{
        var xhttp = []
        var country = count;
        var self = this;
        xhttp[country]=undefined;
        xhttp[country] = new XMLHttpRequest();
        xhttp[country].onreadystatechange = function() {
            if (xhttp[country].readyState === 4 && xhttp[country].status === 200) {

                self.setState({country:self.props.country})
                var data=JSON.parse(xhttp[country].responseText)
                console.log(xhttp[country].responseText)
                if(!data){
                    self.countryHandle(country)
                }
                self.setState({allData:data});
                var confirmedx = { labels:[], data:[] }
                var recoveredx = { labels:[], data:[] }
                var deathsx = { labels:[], data:[] }
                var activex = { labels:[], data:[] }


                data.forEach((value, index)=> {
                   
                    if(index % 30 === 0) {
                        let date = value.Date.split('T')[0]
                        confirmedx.labels.push(date)
                        confirmedx.data.push(value.Confirmed)

                        recoveredx.labels.push(date)
                        recoveredx.data.push(value.Recovered)

                        deathsx.labels.push(date)
                        deathsx.data.push(value.Deaths)

                        activex.labels.push(date)
                        activex.data.push(value.Confirmed - (value.Recovered + value.Deaths))
                    }
                
                });

                self.setState({
                    confirmed:confirmedx,
                    recovered:recoveredx,
                    deaths:deathsx,
                    active:activex
                })
               
                var summary = data[data.length-1];
                if(summary) {
                    self.setState({
                        stotal:summary.Confirmed,
                        srecovered: summary.Recovered,
                        sdeaths: summary.Deaths
                    })
                }

              
            }
        };
        xhttp[country].open("GET", "https://api.covid19api.com/total/dayone/country/"+country, true);
        xhttp[country].send(null);
        }

        render() { 
            return ( 
                <div className="country">

                    <h3>{this.state.country}</h3>

                    <Summary 
                        total={this.state.stotal} 
                        recovered={this.state.srecovered} 
                        deaths={this.state.sdeaths} 
                        active={this.state.stotal - (this.state.srecovered + this.state.sdeaths)}
                    />

                    <LineChart 
                        labels={this.state.confirmed.labels} 
                        data={this.state.confirmed.data} 
                        type="Confirmed"
                    />
                    <LineChart 
                        labels={this.state.recovered.labels} 
                        data={this.state.recovered.data} 
                        type="Recovered"
                    />
                    <LineChart 
                        labels={this.state.deaths.labels} 
                        data={this.state.deaths.data} 
                        type="Deaths"
                    />
                    <LineChart 
                        labels={this.state.active.labels} 
                        data={this.state.active.data} 
                        type="Active"
                    />
                    
                </div>
            );
        }
}
 
export default Country;