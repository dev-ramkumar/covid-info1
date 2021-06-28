import React, { Component } from 'react';
import './subscribe.css';

class Subscribe extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="subscribe">
                <center>
                <input type="email" placeholder="example@domain.com"/>
                <button>Subscribe</button>
                </center>
            </div>
         );
    }
}
 
export default Subscribe;