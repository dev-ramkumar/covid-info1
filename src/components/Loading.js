import React, { Component } from 'react';
import './styles/loading.css';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='loading'>
                <img alt="Loading" src="loading.gif"/>
            </div>
         );
    }
}
 
export default Loading;
