import React, { Component } from 'react';
import './summary.css';

class Summary extends Component {
    state = {  }
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
                <span className="feedback-root">
                    <textarea rows='3' id="feedback-box" placeholder="Enter Your Feedbacks..."></textarea>
                    
                    <button onClick={this.feedback}>Send</button>
                </span>
            </div>
         );
    }
}
 
export default Summary;