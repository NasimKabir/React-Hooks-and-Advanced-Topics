import React, { useReducer } from 'react'

const UseReducerHookONe = () => {
    const InitialState = {
        name: "Nasir Uddin",
        likes:["Cricket","Carram","Travel"]
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Chanage_Name':
                return { 
                    ...state,
                    name: 'Nasim Kabir'
                };

            default:
                return state;
        }
    }
    const [data, dispatch] = useReducer(reducer, InitialState)
    return (
        <>
            <div>
                <h1>Default Name is : {data.name}</h1>
                <h2>{data.name} likes : {data.likes}</h2>
                <button onClick={() => dispatch({ type: "Chanage_Name" })}>Change Name</button>
            </div>
        </>
    )
}

export default UseReducerHookONe
