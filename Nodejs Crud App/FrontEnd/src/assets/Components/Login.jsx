import { useState } from "react"
import React  from 'react'
import {Link} from "react-router-dom"

const Login = ()=>{
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [message,setMessage] = useState()
  const [store,setStore] = useState()


  const HandleSubmit = async (e) =>{
    e.preventDefault();
    const loginData = {
      email:email,
      password:password
    }

    try {
      const response = await fetch('http://localhost:7000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(loginData)
      })

      const Result = await response.json()
      if(response.ok){
        setMessage('Login Successfully')
        setStore(Result)
        localStorage.setItem('Token', Result.Token)
      }
      else{
        setMessage(Result.message)
      }
    } catch (error) {
      setMessage('Something Went Wrong, Please Try Again Later')
    }
  }

console.log(store);

  return (
    <>
        {/* <html className="h-full bg-black"/>
        <body className="h-full"/> */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
           New User ? Create a New Account
            <Link to="/SignUp" className="font-semibold text-indigo-600 hover:text-indigo-500">
           SignUp
            </Link>
          </p>

          {message && <p> {message}</p>}
          {store &&(
            <>
              <p>{store.msg}</p>
              <p>{store.Token}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Login