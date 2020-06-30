
import React,  { Component } from 'react';
import Search from './Search'
import Table from '../../util/Table';
import { Redirect } from 'react-router-dom';


class Users extends Component {

    state = {
        users: this.props.users,
        search :  false,
        serachKey : ''
    }
    
   

    keyEnterhandler = (firstName) => {
      
        let filterByName = Object.values(this.props.users).filter(user => {
            if (user && user.first_name.toLowerCase().includes(firstName.toLowerCase()))
                return user;
        })

        if (filterByName) {
            this.setState({ users: filterByName, search :true, serachKey: firstName});
        }else{
            this.setState({ users: [], search:true, serachKey: firstName});
        }

    }

    render() {
        const conditionalPro = this.state.search ? this.state.users : this.props.users

        console.log("====", this.state)
        console.log("====",this.props)
        return (
            <div>
                
                <h1 id='title'>List of Users </h1>
                <Search onkeyEnter={this.keyEnterhandler}></Search>
                <Table list={conditionalPro} setUser={this.props.setUser}></Table>
            </div>
        );
    }

}

export default Users