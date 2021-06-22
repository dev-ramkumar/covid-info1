import React, { Component } from 'react';


class Table extends Component {
    state = { 
        country:"",
        newData:false,
        filterValue:"",
        tableOrder:"asc",
        
        tableData:[{Country:"aaa"}]
     }

    componentDidMount=()=>{
        var self = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data=JSON.parse(this.responseText).Countries
                console.log(data)
                self.setState({tableData:data})
            }
        };
        xhttp.open("GET", "https://api.covid19api.com/summary", true);
        xhttp.send();
    }

    newDataHandle=()=>{
        this.setState({newData:!this.state.newData})
    }

    filterHandle=(e)=>{
        this.setState({filterValue:e.target.value})
    }

   
    sortByColumnNum=(n)=>{
        var table, rows, switching, i, x, y, shouldSwitch;
        var tableOrder = this.state.tableOrder;

        if(tableOrder==="asc") {
            this.setState({tableOrder:"dec"})
        } else {
            this.setState({tableOrder:"asc"})
        }

        table = document.getElementById("table");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if(tableOrder==="asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            }
            if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            }
        }

    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        
        return {
         country: nextProps.data,
        };
    }

    render() { 
        var newData = this.state.newData;
        var filterValue = this.state.filterValue;

        return ( 
            
            <div>
                <input onChange={this.filterHandle} />
                <button onClick={this.newDataHandle}>{newData?"Show Total Details":"Show New Details"}</button>
                <table id="table">
                    <tr>
                        <th onClick={()=>this.sortByColumnNum(0)}>S.No </th>
                        <th onClick={()=>this.sortByColumnNum(0)}>Coutry</th>
                        <th onClick={()=>this.sortByColumnNum(2)}>{newData ? "New Confirmed":"Total confirmed"}</th>
                        <th onClick={()=>this.sortByColumnNum(3)}>{newData ? "New Deaths":"Total Deaths"}</th>
                        <th onClick={()=>this.sortByColumnNum(4)}>{newData ? "New Recovered":"Total Recovered"}</th>
                    </tr>
                    {this.state.tableData.filter(d=>{
                        if(d.Country.toLowerCase().includes(filterValue.toLowerCase())){
                            return d;
                        }
                        return null;
                    }).map((d,index)=>{
                        return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{d.Country}</td>
                            <td>{newData ? d.NewConfirmed : d.TotalConfirmed}</td>
                            <td>{newData ? d.NewDeaths : d.TotalDeaths}</td>
                            <td>{newData ? d.NewRecovered : d.TotalRecovered}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
         );
    }
}
 
export default Table;