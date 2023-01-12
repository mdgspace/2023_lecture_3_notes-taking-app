import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
const navigate=useNavigate()

    const INITIAL_DATA = {
        username: "",
        password: ""

    }

    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
   const HandleSubmit= async(e)=>{
       e.preventDefault()
       try {
        
         const resp=await axios.post('http://localhost:8000/users/signin/',data)
         setTimeout(() => {
          
           localStorage.setItem('username',resp.data)
         }, 2000);

         navigate('/home')
       } catch (error) {
        alert('some error occured')
       }
      //  setTimeout(() => {
      //      const isLoggedIn = localStorage.getItem('isLoggedIn')
      //      isLoggedIn ? navigate('/home') : navigate('/')
        
      //  }, 2000);
      //  localStorage.setItem('isLoggedIn', true);
      //  localStorage.setItem('name', data.name);
    }
    return (

        <div className="form-wrapper">
            <form action="" className='form'>
               <h1>Login</h1>
                
                <input
                    autoFocus
                    required
                    type="text"
                    value={data.username}
                    placeholder="Name"
                    onChange={e => updateFields({ username: e.target.value })}
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
