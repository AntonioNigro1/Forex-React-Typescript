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
        <input className="register_input" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Full name"></input>
        <input className="register_input" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email"></input>
        <input className="register_input" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password"></input>
        <button className='forms_button' type='submit'>Register</button>
      </form>
    </div>
  )
}