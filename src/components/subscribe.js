import React, { Component } from 'react';
import './subscribe.css';

class Subscribe extends Component {
    state = {  }
    subscribe=()=>{
        var mail  = document.getElementById("email").value;
        if(this.validateEmail(mail)) {
            var data="email="+mail
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                        var data=this.responseText
                        alert(data)
                        document.getElementById("email").value=""
                        
                    }
                };
                xhttp.open("POST", "https://ramkumarg1605.000webhostapp.com/telliant/api/subscribe.php", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(data);
                
        } else {
            alert("Invalid Mail Address")
        }
    }
    validateEmail=(mail)=>{
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
    
             return (false)
        }


        feedback=()=>{
            var feedbacks  = document.getElementById("feedback-box").value;
            if(feedbacks.length>10 && feedbacks.length<1000) {
                var data="feedback="+feedbacks
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                            var data=this.responseText
                            alert(data)
                            document.getElementById("feedback-box").value=""
                            
                        }
                    };
                    xhttp.open("POST", "https://ramkumarg1605.000webhostapp.com/telliant/api/feedback.php", true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send(data);
                    
            } else {
                alert("Length should be less than 1000 and more than 10")
            }
        }

    render() { 
        return ( 
            <div className="subscribe">
                <center>
                <span className="feedback-root">
                    <span><input  id="feedback-box" placeholder="Enter Your Feedbacks..."/></span>
                    <span><button onClick={this.feedback}>Send</button></span>
                </span><br/><br/>
                <input id="email" type="email" placeholder="example@domain.com"/>
                <button onClick={this.subscribe}>Subscribe</button>
                <br/><br/>
                <footer>&copy; 2021 - {window.location.hostname}</footer>
                </center>
            </div>
         );
    }
}
 
export default Subscribe;