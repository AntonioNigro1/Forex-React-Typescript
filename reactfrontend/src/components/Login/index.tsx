import { useState } from 'react';
import { User } from '../interfaces';
import './Login.css';

const defaultUserData = {
  _id: "",
  name: "",
  email: "",
  password: "",
};

export default function Login() {
  const [user, setUser] = useState<User>(defaultUserData);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(user);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    };

    fetch("http://localhost:9000/login", requestOptions)
      .then(response => response)
  };



  return (
    <div className='Login'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input className="login_input" type="email" value={user.email} onChange={onChangeHandler} placeholder="Email"></input>
        <input className="login_input" type="password" value={user.password} onChange={onChangeHandler} placeholder="Password"></input>
        <button className='forms_button' type='submit'>Login</button>
      </form>
    </div >
  )
}