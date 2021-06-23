import axios from 'axios'
import React, {useState, useEffect} from 'react'
import User from './User'
import {Link} from 'react-router-dom'

const Users = (props) => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const renderUsers = () => {
        if(users.length === 0) {
            return <h1>No Users</h1>
        }

        return users.map( user => {
            return <User key={user.id} {...user} updateUsers={updateUsers} deleteUser={deleteUser} />
        })
    }

    const addUser = (user) => {
        let updatedUsers = [user, ...users]
        setUsers(updatedUsers)
    }

    const updateUsers = (user) => {
        let updatedUsers = users.map (u => u.id === user.id ? user : u)
        setUsers(updatedUsers)
    }

    const deleteUser = async (id) => {
        try {
            let res = await axios.delete(`/api/users/${id}`)
            let updatedUsers = users.filter(u=> u.id !== res.data.id)
            setUsers(updatedUsers)
        } catch(err) {
            console.log(err)
            alert('err occurred')
        }
    }





    const getUsers = async () => {
        try {
            let res = await axios.get('/api/users')
            setUsers(res.data)
        } catch (err) {
            alert('error occurred getting users, need to debug')
        }
    }




    return (
        <>
            <h1>Users!</h1>
            <Link to ='/newUser'>New</Link>
            {renderUsers()}
        </>
    )
}

export default Users