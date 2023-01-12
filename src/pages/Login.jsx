import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
const navigate=useNavigate()

    const INITIAL_DATA = {
        name: "",
        password: ""

    }
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
   const HandleSubmit= (e)=>{
       e.preventDefault()
       setTimeout(() => {
           const isLoggedIn = localStorage.getItem('isLoggedIn')
           isLoggedIn ? navigate('/home') : navigate('/')
        
       }, 2000);
       localStorage.setItem('isLoggedIn', true);
       localStorage.setItem('name', data.name);
    }
    return (

        <div className="form-wrapper">

            <form action="" className='form'>
                
                <input
                    autoFocus
                    required
                    type="text"
                    value={data.name}
                    placeholder="Name"
                    onChange={e => updateFields({ name: e.target.value })}
                />

                <input
                    required
                    type="password"
                    value={data.password}
                    placeholder="password"
                    onChange={e => updateFields({ password: e.target.value })}
                />

              <button type='submit' onClick={HandleSubmit}>Submit</button>

                
            </form>
        </div>
    )
}

export default Login
