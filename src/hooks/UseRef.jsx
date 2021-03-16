import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
    const refContainer=useRef(null)
    const [loginForm, setLoginForm] = useState(
        {
            username: '',
            password: ''
        }
    )
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginForm({ ...loginForm, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
      };
      useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus()
      })
    return (
        <div>
            <form>
                <label>UserName </label>
                <input type="text" name="username" value={loginForm.username} onChange={handleChange} ref={refContainer} />
                <br></br>
                <label>Password </label>
                <input type="password" name="password" value={loginForm.password} onChange={handleChange}  />
                <br></br>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UseRef
