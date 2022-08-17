import { useState } from 'react';
import { User } from '../interfaces';
import './Register.css'

const defaultUserData = {
  _id: "",
  name: "",
  email: "",
  password: "",
};

export default function Register() {
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

    fetch("http://localhost:9000/register", requestOptions)
      .then(response => response)
  };

  return (
    <div className='Register'>
      <h1>Register new User</h1>
      <form onSubmit={onSubmit}>
        <input className="register_input" type="text" value={user.name} onChange={onChangeHandler} placeholder="Full name"></input>
        <input className="register_input" type="email" value={user.email} onChange={onChangeHandler} placeholder="Email"></input>
        <input className="register_input" type="password" value={user.password} onChange={onChangeHandler} placeholder="Password"></input>
        <button className='forms_button' type='submit'>Register</button>
      </form>
    </div>
  )
}