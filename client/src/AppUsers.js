import './App.css'
import Users from './components/Users'
import React, {useEffect} from 'react'

function AppUsers() {
    useEffect(() => {
        console.log('AppUsers component mounted')
    })
    return (
        <div className = 'App'>
            <Users />
        </div>
    )
}

export default AppUsers