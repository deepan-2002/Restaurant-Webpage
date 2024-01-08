import React from 'react';
import './Submission.css'
import { useLocation } from 'react-router-dom';

function Submission() {

  const location = useLocation()
  const formData = location.state.formData || {}

  return (
    <main className='next-page d-flex align-items-center justify-content-center'>
      <section className='container p-3 rounded'>
        <div className='row text-center'>
          <p className='heading-1'>{formData.name}, Your Table is successfully booked!!</p>
        </div>


        <div className='row details-row m-auto justify-content-around align-items-center rounded'>
          <div className='col-12 col-md-6 p-2'>
            <p className='heading-2'>Booked Person Details</p>
            <p>Name: <strong>{formData.name}</strong></p>
            <p>Email: <strong>{formData.email}</strong></p>
            <p>Mobile: <strong>{formData.mobile}</strong></p>
          </div>

          <div className='col-12 col-md-6 p-2'>
            <p className='heading-2'>Session Details</p>
            <p>No of Members: <strong>{formData.members}</strong></p>
            <p>Date: <strong>{formData.date}</strong></p>
            <p>Location: <strong>{formData.location}</strong></p>
            <p>Session: <strong>{formData.session}</strong></p>
            <p>Food type: <strong>{formData.food}</strong></p>
          </div>
        </div>
        <div className='row text-center mt-3'>
          <p className='heading-2 m-auto'>Thank You For Your Booking!!</p>
          <p className='heading-3 m-auto'>Enjoy Your Meals</p>
        </div>
      </section>
    </main>
  );
}

export default Submission;