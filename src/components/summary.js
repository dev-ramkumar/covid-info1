import React, { Component } from 'react';
import './summary.css';

class Summary extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="summary">
                <span className='card1'>
                    <text>Total</text>  <br/> <b> {this.props.total} </b>
                </span>
                <span className='card2'>
                    <text>Recovered</text> <br/><b> {this.props.recovered} </b>
                </span>
                <span className='card3'>
                    <text>Deaths</text> <br/> <b>{this.props.deaths} </b>
                </span>
                <span className='card4'>
                    <text>Active</text> <br/><b> {this.props.active} </b>
                </span>
               
            </div>
         );
    }
}
 
export default Summary;