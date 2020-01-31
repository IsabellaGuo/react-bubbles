import React, { useState } from 'react';
import axios from 'axios';
import "../styles.scss";

const Login = props => {
  // console.log(props)
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    // console.log(credentials);
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, credentials)
      .then(res =>
        localStorage.setItem('token', res.data.payload),
        props.history.push(`/dashboard`)
      )
      .catch(err => console.log(err));
    setCredentials({ username: '', password: '' })
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login form</h2>
        <label>Username</label>
        <input
    
          type='text'
          name='username'
          onChange={handleChange}
          value={credentials.username}
        />
        <label>Password</label>
        <input
          
          type='password'
          name='password'
          onChange={handleChange}
          value={credentials.password}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login
