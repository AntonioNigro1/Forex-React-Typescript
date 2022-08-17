import './Background.css';
import { useState } from 'react';
import Register from '../Register';

export default function Topmenu() {
  const [component, setComponent] = useState<React.FunctionComponent>(Register);

  const LoadComponent = async (location: string) => {
    const { default: component } = await import(`../${location}`);
    setComponent(component);
  }

  return (<>
    <div className='menu'>

      <img className='top_img' src="/images/topbg.jpg" alt='' />
      <button className='menu_button'>Deposit</button>
      <button className='menu_button'>Withdraw</button>
      <button className='menu_button'>Exchange</button>
      <button className='menu_button'>Trade</button>
      <button className='menu_button'>History</button>
      <button className='menu_button' onClick={(e) => LoadComponent("Login/Login.tsx")}>Login</button>
      <button className='menu_button' onClick={(e) => LoadComponent("Register/Register.tsx")}>Register</button>
    </div>
    {component}
  </>
  )
}

