import React, { Component } from 'react';
import countries from '../countries';
import './nav.css'

class Nav extends Component {
    state = {  }

    
   searchHandle=()=>{
     var country = document.getElementById("in-country").value;
    for (var i=0; i < countries.length; i++) {
      if (countries[i].Slug === country) {
        if(window.location.hostname==="localhost"){
          window.open("http://"+window.location.hostname+":3000/country/"+country,"_parent");
        } else {
        window.open("http://"+window.location.hostname+"/country/"+country,"_parent");
       // console.log("http://"+window.location.hostname+"/country/"+country)
        }
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