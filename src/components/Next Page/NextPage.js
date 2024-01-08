import React from 'react';
import './NextPage.css'
import { useLocation } from 'react-router-dom';

function NextPage() {
  
  const location = useLocation()
  const formData = location.state.formData || {}

  return (
    <main className='next-page d-flex align-items-center justify-content-center'>
        <section className='container p-5 rounded'>
          <div className='row text-center'>
            <h1>{formData.name}, Your Table is successfully booked !!</h1>
          </div>

          <div className='row details-row justify-content-center rounded'>
            <div className='col p-2'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-6 me-md-5'>
                  <div>
                    <h3>Booked Person Details</h3>
                    <p>Name: <strong>{formData.name}</strong></p>
                    <p>Email: <strong>{formData.email}</strong></p>
                    <p>Mobile: <strong>{formData.mobile}</strong></p>
                  </div>
                </div>

                <div className='col-12 col-md-6 ms-md-5'>
                  <h3>Session Details</h3>
                  <p>No of Members: <strong>{formData.members}</strong></p>
                  <p>Date: <strong>{formData.date}</strong></p>
                  <p>Location: <strong>{formData.location}</strong></p>
                  <p>Session Booked: <strong>{formData.session}</strong></p>
                  <p>Food type: <strong>{formData.food}</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className='row text-center'>
            <h4>Thank You For Your Booking!!</h4>
            <h5>Enjoy Your Meals</h5>
          </div>
        </section>
    </main>
  );
}

export default NextPage;