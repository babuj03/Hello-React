import { Component } from "react";
import React from 'react'
import { connect } from 'react-redux';
import Users  from  '../components/users/Users'
import fetchUsers from '../containers/UserAction'
import Search from '../components/users/Search'

class UserManagement extends React.PureComponent
{
    constructor(props) {
        super(props);
      }

    callbackFunction = (childData) => {
        const { history } = this.props;
        this.props.setUser(childData)
        history.push('user/'+childData.id)
     } 

    render () {
        console.log('---------------',this.users)
        return (
           <div>
                { <Users users={this.props.users} setUser={this.callbackFunction} ></Users>}
           </div>
        );
    }

    componentDidMount() {

        console.log('------1---------',this.users)
        fetchUsers("/users").then(res=>{
        if(res.data) {
          this.props.fetchUsers(res.data);
        }
      });
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        user:state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: (users) => dispatch({type: 'FETCH_USERS', value:users}),
        setUser: (user) => dispatch({type: 'ACTIVE_USER', value:user})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserManagement);