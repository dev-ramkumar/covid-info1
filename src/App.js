import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './components/table';
import Nav from './components/nav';
//import Summary from './components/summary';
import countries from './countries';
import Country from './components/country';
import './App.css';
import Subscribe  from './components/subscribe';

class App extends Component {
  state = { 
    table:[],
    country:"india",
    sTotal:0,
    sRecovered:0,
    sDeaths:0
   }

  
   summaryHandle=(total, recovered, deaths)=>{
    if(this.state.sTotal!==total && this.state.sRecovered!==recovered && this.state.sDeaths!==deaths) {
        this.setState({
          sTotal: total,
          sRecovered:recovered,
          sDeaths:deaths
        })
    }
   }

 
  changeCountry=(country)=>{

    for (var i=0; i < countries.length; i++) {
      if (countries[i].Slug === country) {
         this.setState({country})
        break
      }
     }

  }

  render() { 
    return ( 
      <div className="App">



        <Nav changeCountry={this.changeCountry}/>

       
        {this.state.country==="GLOBAL" ? <Table changeCountry={this.changeCountry}/>: <Country country={this.state.country} />}
        
        


        

        <Subscribe />
      </div>
     );
  }
}
 
export default App;