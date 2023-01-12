import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const SIgnup = () => {
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
   const HandleSubmit=async (e)=>{
       e.preventDefault()
       try {
        
           await axios.post("http://localhost:8000/users/signup/", data);
           navigate('/login')
       } catch (error) {
        
       }
    }
    return (

        <div className="form-wrapper">
            <form action="" className='form'>
          <h1>Signup Form</h1>
                
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

export default SIgnup
