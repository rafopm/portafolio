import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth'

export default function LoginPage() {
const history = useNavigate();
const location = useLocation();
const previusObjectURL = location.state?.from.pathname;
//console.log(previusObjectURL)

  const auth = useAuth();

  const handleLogin=() => {
    auth.login();
    history(previusObjectURL || "/dashboard")
   // history(previusObjectURL)
  }
  
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>
        Signin

      </button>
    </div>
  )
}
