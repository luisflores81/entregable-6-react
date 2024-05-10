import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const createUser = useAuth();
  const { handleSubmit, register, reset } = useForm();
  
const Submit = data => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users>';
  createUser(url, data);
  reset({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phome: ''
  })

}
  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input {...register('firstName')} id='firstName' type='text' />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input {...register('firstName')} id='firstName' type='text' />
        </div>
        <div>
          <label htmlFor="firstName">email:</label>
          <input {...register('email')} id='email' type='email' />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input {...register('password')} id='password' type='password' />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input {...register('firstName')} id='firstName' type='text' />
        </div>
        <div>
          <label htmlFor="phome">phome:</label>
          <input {...register('phome')} id='phome' type='text' />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;

