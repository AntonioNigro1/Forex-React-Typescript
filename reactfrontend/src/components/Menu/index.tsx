import './styles.css';

import { ComponentClass, useState } from 'react';
import { Register } from '../Register/index';
import { Login } from '../Login';

import { BrowserRouter, Link } from 'react-router-dom'
export default function Menu() {

  return (
    <>
      <div className='menu'>
        <img className='top_img' src="/images/topbg.jpg" alt='' />

        <button className='menu_button'>Deposit</button>

        <button className='menu_button'>Withdraw</button>

        <button className='menu_button'>Exchange</button>

        <button className='menu_button'>Trade</button>

        <button className='menu_button'>History</button>
        <Link to="/Login">
          <button className='menu_button'>Login</button></Link>
        <Link to="/Register">
          <button className='menu_button'>Register</button></Link>
      </div>

    </>
  )
}