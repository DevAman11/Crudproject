import React from 'react'
import {Link, useState} from "react-router-dom"


function SignUp() {
   const [Form,setForm] = useState({
      Name:'',
      
   })
   
  return (
   <>
   <h1> SignUp Page</h1>
    <div className='ContainerDiv '>
        <div className='ParentMain'>

        <div className='ParentContent'> 
        <div className='Content'> 
           <div className='HeadingDiv'>
            <h1>SignUp</h1>
           </div>
           <div className='inputDiv'>
           <input type='text' placeholder='Name'  name='Name'/>  <br/>
           <input type='phone' placeholder='Phone' name='Phone'/> <br/>
           <input type='email' placeholder='Email' name='Email'/> <br/>
           <input type='password' placeholder='Password' name='Password'/> <br/>
            </div>
            <div className='ButtonDiv'>

           <button type='submit'>
              SignUp
           </button>
            </div>

         </div>
        </div>
       
        </div>
    </div>
   </>
  )
}

export default SignUp