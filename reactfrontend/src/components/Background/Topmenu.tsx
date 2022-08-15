import './Background.css';

export default function Topmenu() {
  return (
    <div className='menu'>
      <img className='top_img' src="/images/topbg.jpg" alt='' />
      <button className='menu_button'>Deposit</button>
      <button className='menu_button'>Withdraw</button>
      <button className='menu_button'>Exchange</button>
      <button className='menu_button'>Trade</button>
      <button className='menu_button'>History</button>
      <button className='menu_button'>Login</button>
      <button className='menu_button'>Register</button>
    </div>


  )
}

