import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  <footer className=" pt-5 text-center">
    <div className="container pb-5"  >
<div className="row">
  <div className="col-md-4">
<div>
  <h2 className='text-white fw-bold mb-3'>LOCATION</h2>
  <p className='text-white mb-2'  >Future City</p >
  <p className='text-white  mb-5'>Cairo, Egypt</p>
</div>
  </div>
  <div className="col-md-4">
  <div>
  <h2 className='text-white fw-bold mb-3'>AROUND THE WEB</h2>
  <div className='icon mt-3 d-flex justify-content-center align-items-center'>
    <div className='icon2 d-flex justify-content-center align-items-center me-3'>
    <a className='text-decoration-none' href='https://www.linkedin.com/in/mohamed-ahmed-a8a7182a2'>
    <i className="fa-brands fa-linkedin fa-xl  text-white"></i>
    </a>
    </div>
    
    
    <div className='icon2 d-flex justify-content-center align-items-center me-3'>
    <a className='text-decoration-none' href='https://github.com/ProbablyMohamed'>
    <i className="fa-brands fa-github fa-xl  text-white"></i>
    </a>
    </div>
    
    
  </div>
  
</div>

  </div>
  <div className="col-md-4">
  <h2 className='text-white fw-bold mb-3'>ABOUT FREELANCER</h2>
<p className='text-white mt-2'>Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap.</p>

  </div>
</div>
    
    </div>
    <div className='py-3 footer-feet'>
    <p className='text-white'>Copyright © Your Website 2024</p>
  </div>
  </footer>
  
  
  </>
}
