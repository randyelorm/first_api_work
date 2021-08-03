import React from 'react';
import "./userfunc.css"
import {useState, useEffect } from "react"
import axios from "axios"

const UserFunc = () => {

    const [FuncUsers, setFuncUsers ] = useState ([])

    useEffect ( ()=> {
        axios.get ("https://jsonplaceholder.typicode.com/users")
        .then (
            (res)=> {
          
                setFuncUsers(res.data)
            }
        )
        .catch (
            (err)=> {
                console.log(err)
            }
        )



    }, [] )

    return (
        <div className = "user_div">
            <h1>Users using Functional Component</h1>
            <p>{
            
            FuncUsers.map (
                (each_user)=> {
                   return <h3>{each_user.name}</h3>
                }
            )
            
            }</p>
        </div>
    );
}

export default UserFunc;
