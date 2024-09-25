import React from 'react'

export default function About() {
  return (
    <>
      <section className='vh-100 bg-dark text-center d-flex justify-content-center align-items-center about'>
        <div>
          <h2 className='text-white fw-bolder mb-4'>ABOUT ME</h2>
          <div className='icon-home'>
            <i className="fa-solid fa-star fa-xl text-white"></i>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <p className='text-white'>
                  I am a 20-year-old full-stack web developer specializing in React and Node.js. Currently, I am pursuing my 3rd year in Computer Science at Cairo University. I also hold a Full-Stack certificate from Route Academy, a comprehensive 9-month program.
                </p>
              </div>
              <div className='col-md-6'>
                <p className='text-white'>
                My skill set includes building scalable, responsive web applications using the MERN stack (MongoDB, Express, React, Node.js). I'm passionate about mastering new technologies and staying up-to-date with industry trends. I have hands-on experience in developing RESTful APIs, integrating front-end interfaces, and working with databases to create efficient, well-structured solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
