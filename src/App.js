import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './components/table';
import Nav from './components/nav';
//import Summary from './components/summary';
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

  componentDidMount=()=>{
   
  }

  render() { 
    return ( 
      <div className="App">



        <Nav />

       


        <Router>
          <Switch>
          <Route path="/" component={()=>{
            return (<div className="table">
              <Table summary={this.summaryHandle}/>
            </div>)
          }} exact/>
          <Route path="/country" component={Country} />
          </Switch>
        </Router>
        
        


        

        <Subscribe />
      </div>
     );
  }
}
 
export default App;