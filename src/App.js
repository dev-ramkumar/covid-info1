import React, { Component } from 'react';
import Table from './components/table';
import Nav from './components/nav';
import countries from './countries';
import Country from './components/country';
import './App.css';
import Subscribe  from './components/subscribe';

class App extends Component {
  state = { 
    country:"GLOBAL"
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