import React, { Component } from 'react';
import countries from '../countries';
import './nav.css'

class Nav extends Component {
    state = {  }

    
   searchHandle=()=>{
     var country = document.getElementById("in-country").value;
    for (var i=0; i < countries.length; i++) {
      if (countries[i].Slug === country) {
       this.props.changeCountry(country)
        break
      }
     }
   }

    render() { 
        return ( 
            <div className="top">
              <b>Covid19 Info</b> 
                <div className="input">
                  <input id="in-country" list="countries" placeholder="Country" />
                  <button onClick={this.searchHandle}>Search</button>
                </div>
                <datalist id="countries">
                  {countries.map((val,index) => {
                    return (
                      <option key={index} value={val.Slug}>{val.Country}</option>
                    );
                  })}
                </datalist>  
            </div>
         );
    }
}
 
export default Nav;