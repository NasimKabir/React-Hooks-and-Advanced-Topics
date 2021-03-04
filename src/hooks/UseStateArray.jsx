import React from 'react'

export const UseStateArray = () => {
    const [employee, SetEmployee] = React.useState(
        [
            { id: 1, name: 'john' },
            { id: 2, name: 'peter' },
            { id: 3, name: 'susan' },
            { id: 4, name: 'anna' }
        ]
    )
    
    const removeItems = (id) => {
        let newEmployee = employee.filter((emp) => emp.id !== id);
        SetEmployee(newEmployee);
    }
    return (
        <>
            {
                employee.map((emp) => {
                    const { id, name } = emp;
                    return (
                        <>
                            <div key={emp.id}>
                                <h1>{emp.id} {emp.name} </h1>
                                <button onClick={() => removeItems(id)}>remove</button>
                            </div>
                        </>
                    )
                })
            },
            < button  onClick={() => SetEmployee([])}> clear items</button>


        </>)
}
