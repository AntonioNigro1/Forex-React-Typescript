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
  const { _id, name, email, password } = user;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

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
      <h1>Register new user</h1>
      <form onSubmit={onSubmit}>
        <input className="register_input" type="text" value={name} onChange={onChange} placeholder="Full name"></input>
        <input className="register_input" type="email" value={email} onChange={onChange} placeholder="Email"></input>
        <input className="register_input" type="password" value={password} onChange={onChange} placeholder="Password"></input>
        <button className='forms_button' type='submit'>Submit</button>
      </form>
    </div>
  )
}