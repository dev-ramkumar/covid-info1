import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/admin/admin';
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
      if (countries[i] === country) {
        
         this.setState({country})
        break
      }
     }

  }
  componentDidMount=()=>{
  
  }

  render() { 
    return ( 
      <div className="App">

        <Nav changeCountry={this.changeCountry}/>

        <BrowserRouter>
        <Switch>
        <Route path="/" component={()=>{
          return this.state.country==="GLOBAL" ? <div><Table changeCountry={this.changeCountry}/> <Subscribe /></div>: <div><Country country={this.state.country} /><Subscribe /></div>
        }} exact />
        <Route path="/admin" component={Admin} />
        </Switch>
        </BrowserRouter>
        
      </div>
     );
  }
}
 
export default App;