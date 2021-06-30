import React, { Component } from 'react';
import LineChart from './lineChart';
import Summary from './summary';
import './country.css';

class Country extends Component {
    state = { 
        country:"Loading...",
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
     componentDidUpdate(prevProps){
        if ( prevProps.country !== this.props.country ) {
          this.countryHandle(this.props.country);
        }
      }
    
    
     
     countryHandle=(count)=>{
        this.setState({country:"Loading..."})
        console.log(1)
        var country = count;
        var self = this;
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4 && xhttp.status === 200) {

                self.setState({country:self.props.country})
                var data=JSON.parse(xhttp.responseText)
               
                self.setState({allData:data});
                var confirmedx = { labels:[], data:[] }
                var recoveredx = { labels:[], data:[] }
                var deathsx = { labels:[], data:[] }
                var activex = { labels:[], data:[] }


                data.forEach((value, index)=> {
                    console.log(JSON.parse(value))
                   value=JSON.parse(value)
                   
                        let date = value.date
                        confirmedx.labels.push(date)
                        confirmedx.data.push(value.total)

                        recoveredx.labels.push(date)
                        recoveredx.data.push(value.recovered)

                        deathsx.labels.push(date)
                        deathsx.data.push(value.deaths)

                        activex.labels.push(date)
                        activex.data.push(value.active)

                
                });

                self.setState({
                    confirmed:confirmedx,
                    recovered:recoveredx,
                    deaths:deathsx,
                    active:activex
                })
               
                var summary = JSON.parse(data[data.length-1]);
                
                if(summary) {
                    self.setState({
                        stotal:summary.total,
                        srecovered: summary.recovered,
                        sdeaths: summary.deaths
                    })
                }

              
            }
        };
        xhttp.open("GET", "https://ramkumarg1605.000webhostapp.com/telliant/api/country-data.php?country="+country, true);
        xhttp.send(null);
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