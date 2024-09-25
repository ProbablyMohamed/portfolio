import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
 
    const emailParams = {
      from_name: formData.name,
      to_name: 'Me',      
      phone: formData.phone,
      email: formData.email,
      linkedin: formData.linkedin,
    };
  
    
    emailjs.send(
      'service_7vtqk6a',
      'template_owcsc2b',
      emailParams,              
      'lWINHWDbX1i-6s3Sh'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully');
     
      setFormData({ name: '', phone: '', email: '', linkedin: '' });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send email');
    });
  };
  

  return (
    <section className='contact py-5 text-center d-flex align-items-center justify-content-center bg-dark'>
      <div>
        <h1 className='fw-bold text-white my-3'>CONTACT ME SECTION</h1>
        <div className='icon-home'>
          <i className="fa-solid fa-star fa-xl text-white"></i>
        </div>
        <div className='w-100 m-auto mt-5'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className='w-100 mb-5 form-control form-control-lg border-0 border-bottom rounded-0'
            />
            <input
              type="number"
              name="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              className='w-100 mb-5 form-control form-control-lg border-0 border-bottom rounded-0'
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-100 mb-5 form-control form-control-lg border-0 border-bottom rounded-0'
            />
            <input
              type="text"
              name="linkedin"
              placeholder='LinkedIn'
              value={formData.linkedin}
              onChange={handleChange}
              className='w-100 mb-5 form-control form-control-lg border-0 border-bottom rounded-0'
            />
            <button className='btn btn-secondary send'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
