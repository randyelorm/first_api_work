import React, { Component } from 'react';
import "./user.css"

class UsersClass extends Component {

    constructor (props) {
        super (props)
        this.state = {
            users : []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then (
            (data)=> {
                this.setState({
                    users: data
                })
            }
        )
        .catch(
            (err)=> {
            console.log(err)
            }
        )
    }
    render() {
        return (
            <div className = "user_div">
            <h1>Users From Api using class component</h1>
                <p className = "text-center">
                    {
                        this.state.users.map(
                            (user)=> {
                              return <h3>{user.name}</h3> 
                            }
                        )
                    }
                </p>
            </div>
        );
    }
}

export default UsersClass;
