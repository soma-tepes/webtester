import React from 'react'
import "../../Styles/Login.css"
const Login = () => {

const handleLogin = (e)=>{
  e.preventDefault()
}


  return (
    <div className='loginContainer'>
      <div className='subContainerLogin'>

        <div className='formLogin'>
          <form onSubmit={handleLogin}>

            <label htmlFor="">Name!</label>
           <input type="text" />
            <label htmlFor="">Code</label>
            <input type="password" />
            <button>Send!</button>
          </form>
        </div>


      </div>
    </div>
  )
}

export default Login