import React, { useState } from 'react'
import './contact.scss'

export const Contact = () => {
  const [formData, setFormData] =useState({
    email:'',
    feedback:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('feedback submitted:', formData);
  };

  return (
    <div className='contact-container'>
      <section>
      <h3>Provide feedback</h3>
      <form onSubmit={handleSubmit}>
  <div className="form-group ">
    <label className='mb-1'>Email</label>
    <input type="email" className="form-control" id="email" placeholder=""
    />
  </div>
  <div className="form-group mt-2">
    <label className='feedback'>Feedback</label>
    <textarea 
    className="form-control" 
    id="feedback" 
    rows="3" 
    onChange={handleChange} 
    required
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary mb-2 mt-2">Submit</button>
</form>
      </section>
      </div>
  )
}

