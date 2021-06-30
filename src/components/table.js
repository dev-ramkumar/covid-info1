import React, { Component } from 'react';
import MaterialTable from 'material-table';
import './table.css';
import Summary from './summary';


class Table extends Component {
    state = { 

        total:0,
        recovered:0,
        deaths:0,
        active:0,
       
        tableData:[],
   
     }

    

    componentDidMount=()=>{
      
        var self = this
             
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        var data=JSON.parse(this.responseText)
                        self.setState({tableData:data,
                        
                        })
                        var sum=data.data[0];
                        
                        self.setState({
                            total:sum['Total Cases'],
                            recovered:sum['Total Recovered'],
                            deaths:sum['Total Deaths'],
                            active:sum['Active Cases']
                        })
                        
                        
               
                    }
                };
                xhttp.open("GET", "https://ramkumarg1605.000webhostapp.com/telliant/api/covidapi.php", true);
                xhttp.send();
           
        }
   
    render() { 

       
        return ( 
            <div>

                <Summary 
                    total={this.state.total} 
                    recovered={this.state.recovered} 
                    deaths={this.state.deaths} 
                    active={this.state.active}
                />
                
            
            
                <div className="gtable">
                

                        <MaterialTable
                        tableRef={this.tableRef}
                        columns={[
                            { title: "Country", field: "Country" },
                            { title: "Total Confirmed", field: "Total Cases" },
                            { title: "Total Deaths", field: "Total Deaths" },
                            { title: "Total Recovered", field: "Total Recovered" }
                        ]}
                        data={
                            this.state.tableData.data
                        }
                        onRowClick={(evt,rowData)=>{
                           
                            this.props.changeCountry(rowData.Country);
                            }}
                        
                        options={{
                            sorting: true,
                            exportButton: true,
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                fontWeight: 'bold'
                                
                            },
                            
                            cellStyle: {
                                textAlign: "center",
                                padding: "7px",
                                paddingRight:"80px"
                                
                            },
                            rowStyle: {
                            backgroundColor: '#EEE',
                            textAlign:"center"
                            }
                        }}
                        title="Covid Details : World"
                        />
                        
                            
                    </div>

            </div>
         );
    }
}
 
export default Table;