import React, { Component } from 'react'

class Table extends Component {

    constructor(props) {
        super(props) 
    }

        renderTableData() {
            if(this.props.list) {
            return this.props.list.map((user, index) => {
            const { id, first_name, middle_name,last_name,dob,active, createdBy } = user //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{middle_name}</td>
                    <td>{last_name}</td>
                    <td>{dob}</td>
                    <td>{active?'Active':'inActive'}</td>
                    <td>{createdBy}</td>
                    <td><button onClick={() => { this.props.setUser(user) }}>Details</button></td>
                </tr>
            )
            })
        }
        }

        renderTableHeader() {
            console.log(this.props, this.props.list)
           if(this.props.list && this.props.list[0]) {
                let header = Object.keys(this.props.list[0])
                header = header.splice(0,7)
                header.push("Details")
                return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
                })
          }
         }
      

        render() {
            return (
            <div>
                <table id='users'>
                    <tbody>
                     { this.renderTableHeader()
                     }
                     {this.renderTableData()}
                    </tbody>
                </table>
            </div>
            )
        }
        }

export default Table