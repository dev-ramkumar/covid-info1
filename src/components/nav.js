import React, { Component } from 'react';
import countries from '../countries';
import './nav.css'

class Nav extends Component {
    state = { 
      incheck:"white"
     }

    
   searchHandle=()=>{
     var country = document.getElementById("in-country").value;
    for (var i=0; i < countries.length; i++) {
      if (countries[i] === country) {
       this.props.changeCountry(country)
        break
      }
     }
   }

   changeInputHandle=(e)=>{
    for (var i=0; i < countries.length; i++) {
      if (countries[i] === e.target.value) {
        this.setState({incheck:"#aaffaa"})
        break
      }
      (e.target.value!=="")? this.setState({incheck:"#ffaaaa"}):this.setState({incheck:"#ffffff"});
     }
   }
    render() { 
        return ( 
            <div className="top">
              <b>Covid19 Info</b> 
                <div className="input">
                  <input
                  style={{background:this.state.incheck}}
                      id="in-country" 
                      list="countries" 
                      placeholder="Country" 
                      onChange={this.changeInputHandle}
                   />
                  <button className="search-btn" onClick={this.searchHandle}>Search</button>
                </div>
                <datalist id="countries">
                  {countries.map((val,index) => {
                    return (
                      <option key={index} value={val}>{val}</option>
                    );
                  })}
                </datalist>  
            </div>
         );
    }
}
 
export default Nav;