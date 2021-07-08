import React, { Component } from 'react';
import MaterialTable from 'material-table';
import './admin.css';
import Login from './login';

class Admin extends Component {
    state = { 
        showLogin: true,
        data:"",

        username:"",
        password:"",
        adminPassword:""
     }
     loginStatus=(d)=>{
         if(d==="0") {
         this.setState({showLogin:false})  
         }
     }

     getData=(data)=>{
         this.setState({data})
     }

     inputChangeHandle=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }


     addUser=()=> {
       
        var username=this.state.username;
        var password=this.state.password;
        var adminPassword=this.state.adminPassword;
        var data = "username="+username+"&password="+password+"&admin-password="+adminPassword;
       
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText)
               alert(this.responseText)
            }
        };
     xhttp.open("POST", "https://ramkumarg1605.000webhostapp.com/telliant/api/adduser.php", true);
     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send(data);
     }

    render() { 
        if(this.state.showLogin){
            return <Login sendData={this.getData} loginStatus={this.loginStatus}/>
        } else {
            return ( 
                <div className="admin">
                   <div className="adduser-root">

                       <input name="username" onChange={this.inputChangeHandle} placeholder="New Username"/>
                       <input name="password" onChange={this.inputChangeHandle} type="password" placeholder="User Password"/>
                       <input name="adminPassword" onChange={this.inputChangeHandle} type="password" placeholder="Admin Password"/>
                       <button onClick={this.addUser}>Add User</button>

                   </div>
                    <div className="subscribe-details">
                    <MaterialTable
                        columns={[
                            { title: "Email", field: "email" },
                            { title: "Date", field: "date" },
                            { title: "Location", field: "location" }
                        ]}
                        data={
                            this.state.data.subscribe
                        }
                        
                        options={{
                            sorting: false,
                            exportButton: true,
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                fontWeight: 'bold'
                            },
                            cellStyle: {
                                padding: "7px",
                            },
                            rowStyle: {
                            backgroundColor: '#EEE',
                            }
                        }}
                        title="Subscribers Details"
                        />
                        
                    </div>
                    <div className="feedback-details">
                    <MaterialTable
                        columns={[
                            { title: "Feedback", field: "feedback" },
                            { title: "Date", field: "date" },
                            { title: "Location", field: "location" }
                        ]}
                        data={
                            this.state.data.feedback
                        }
                        
                        options={{
                            sorting: false,
                            exportButton: true,
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                fontWeight: 'bold'
                            },
                            cellStyle: {
                                padding: "7px",
                            },
                            rowStyle: {
                            backgroundColor: '#EEE',
                            }
                        }}
                        title="Feedback Details"
                        />
                    </div>
                    <br/><br/><br/><br/>
                </div>
             );
        }
       
    }
}
 
export default Admin;