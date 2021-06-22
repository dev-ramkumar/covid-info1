import React, { Component } from 'react';
import countries from './countries';
import Table from './components/table';
import Charts from './components/chart';
import './App.css';

class App extends Component {
  state = { 
    table:[],
    country:"india",
    pieCountry:"",
    pieConfirmed:0,
    pieRecovered:0,
    pieDeath:0
   }

   searchHandle=(e)=>{
    for (var i=0; i < countries.length; i++) {
      if (countries[i].Slug === e.target.value) {
        this.setState({country:e.target.value})
        break
      }
  }
   }

   pieChartHandle=(country, confirmed, recovered, death)=>{
     this.setState({
       pieCountry:country,
       pieConfirmed:confirmed,
       pieRecovered:recovered,
       pieDeath:death
     })
   }

  componentDidMount=()=>{
   
  }

  render() { 
    return ( 
      <div className="App">
        <div className="top">
        <input list="countries" placeholder="Country" onChange={this.searchHandle}/>
        <datalist id="countries">
          {countries.map((val,index) => {
            return (
              <option key={index} value={val.Slug}>{val.Country}</option>
            );
          })}
        </datalist>  

        </div>

        <div className="chart">

          <Charts country={this.state.pieCountry} confirmed={this.state.pieConfirmed} recovered={this.state.pieRecovered} death={this.state.pieDeath}/>

        </div>

        <div className="table">
          <Table data={this.state.country} pieChart={this.pieChartHandle}/>
        </div>
      </div>
     );
  }
}
 
export default App;