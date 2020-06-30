import React, { Component } from 'react'

export class User extends React.PureComponent {
    constructor(props)
    {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }
    render() {

        console.log( 'Router Param ::::',this.props.match.params.id)

        return (
            <div>
            <h1>Welcome to User component</h1>
            <img 
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=100"
                    alt="new"
            />
            <button onClick={this.goBack}>Go Back</button>
          </div>
        )
    }
}


export default User
