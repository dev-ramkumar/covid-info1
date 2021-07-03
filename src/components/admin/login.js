import React, { Component } from 'react';
import './admin.css';
class Login extends Component {
    state = { 
        showLogin:true,
        loginError:"",

        username:"",
        password:""
     }

     updateData=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }

     login=()=>{
         var self = this;
        var data="username="+this.state.username+"&password="+this.state.password;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var response=JSON.parse(this.responseText)
                console.log(response)
                if(response.status==="1"){
                    self.props.loginStatus("0")
                    self.props.sendData(response)

                } else {
                    self.setState({loginError:response.status})
                }
            }
        };
     xhttp.open("POST", "https://ramkumarg1605.000webhostapp.com/telliant/api/login.php", true);
     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send(data);

    }

    render() { 
        return ( 
            <div className="login-root">

                <h2>LOGIN</h2>
                <text id="error-box">{this.state.loginError}</text><br/>
                <input name="username" className="username-in" type="text" placeholder="Username" onChange={this.updateData}/><br/>
                <input name="password" className="password-in" type="password" placeholder="Password" onChange={this.updateData}/><br/>
                <input className="login-in" type="button" value="Login" onClick={this.login}/>
                
            </div>
         );
    }
}
 
export default Login;