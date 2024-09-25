import React from 'react'
import logo from '../../image/profile.png';
export default function Home() {
  return <>
  <header className='vh-100 bg-dark text-center d-flex align-items-center justify-content-center'>
<div >
<img src={logo} alt="" className='w-25 rounded-5' />
<h1 className='fw-bold text-white my-3'>MOHAMED AHMED</h1>
<div className='icon-home'>
<i className="fa-solid fa-star fa-xl text-white"></i>
</div>
<p className='text-white fw-bold mt-3'>FULLSTACK WEB DEVELOPER(REACT/NODEJS) </p>
</div>

  </header>
  
  
  </>
}
