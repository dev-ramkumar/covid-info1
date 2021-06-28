import React, { Component } from 'react';
import MaterialTable from 'material-table';
import './table.css';
import Summary from './summary';




class Table extends Component {
    state = { 

        total:0,
        recovered:0,
        deaths:0,
       
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
                        self.setState({
                            total:data.Global.TotalConfirmed,
                            recovered:data.Global.TotalRecovered,
                            deaths:data.Global.TotalDeaths
                        })
                        
               
                    }
                };
                xhttp.open("GET", "https://api.covid19api.com/summary", true);
                xhttp.send();
           
        }

    
     

  
    
    render() { 

       
        return ( 
            <div>

        <Summary 
            total={this.state.total} 
            recovered={this.state.recovered} 
            deaths={this.state.deaths} 
            active={this.state.total - (this.state.recovered + this.state.deaths)}
        />
                
            
            
        <div className="gtable">
           

        <MaterialTable
          tableRef={this.tableRef}
          columns={[
            { title: "Country", field: "Country" },
            { title: "Total Confirmed", field: "TotalConfirmed" },
            { title: "Total Deaths", field: "TotalDeaths" },
            { title: "Total Recovered", field: "TotalRecovered" }
          ]}
          data={
              this.state.tableData.Countries
          }
          onRowClick={(evt,rowData)=>{
              this.props.changeCountry(rowData.Slug);
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
                textAlign: "right",
                padding: "7px",
                paddingRight:"80px"
                
            },
            rowStyle: {
             backgroundColor: '#EEE',
             textAlign:"right"
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