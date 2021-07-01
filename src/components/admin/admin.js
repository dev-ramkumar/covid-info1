import React, { Component } from 'react';
import Login from './login';

class Admin extends Component {
    state = { 
        showLogin: true
     }
    render() { 
        return ( 
            <div className="admin">
                Admin Page
            </div>
         );
    }
}
 
export default Admin;