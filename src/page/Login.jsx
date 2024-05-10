import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const [hasToken, setHasToken] = useState('');
  const loginUser = useAuth();
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    setHasToken(localStorage.getItem('token'));
  }, []);
// revisar await
    const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
     loginUser(url, data);
     reset({
      email: '',
      password: '',
    });
    setHasToken(localStorage.getItem('token'));  
    setTimeout(() =>{
     Navigate('cart');  
     },2000);
   
  }
      const handleLogout = () => {
      localStorage.removeItem('token'); 
      setHasToken();
    }

   return (
    <>
      {hasToken ?
        <button onClick={handleLogout}>Logout</button> :
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor='email'>Email</label>
              <input {...register('email')} id='email' type="rmail" />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input {...register('password')} id='password' type="password" />       
            </div>
            <button>Login</button>
          </form>
          <p> If you're not registered yet <Link to='/register'>register</Link></p>
        </div>
      }
    </>
  )
}

export default Login;
