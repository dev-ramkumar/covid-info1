import React, { Component } from 'react';
import countries from './countries';
import Table from './components/table';
//import Chart from './components/table';
import './App.css';

class App extends Component {
  state = { 
    table:[],
    country:"india"
   }

   searchHandle=(e)=>{
    for (var i=0; i < countries.length; i++) {
      if (countries[i].Slug === e.target.value) {
        this.setState({country:e.target.value})
        break
      }
  }
     
     
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

        </div>

        <div className="table">
          <Table data={this.state.country} />
        </div>
      </div>
     );
  }
}
 
export default App;