import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users'

const UseEffectFetchApi = () => {
    const [users, setUser] = useState([])

    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json()
        console.log(users)
        setUser(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        < >
            <h3>github users</h3>
            {
                users.map((user,index) => (
                    <>
                        <h1 key={index}>{user.login}</h1>
                        <img src={user.avatar_url} alt="login" />
                    </>
                ))
            }
        </ >
    )
}

export default UseEffectFetchApi
