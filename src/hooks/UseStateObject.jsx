import React,{useState} from 'react'

const UseStateObject = () => {
    const [employee,setEmployee]=useState({ id: 1, name: 'john' })
    return (
        <div>
            <h1>{employee.name}</h1>
        </div>
    )
}

export default UseStateObject
