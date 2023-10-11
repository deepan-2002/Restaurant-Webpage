import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NextPage.css'

function NextPage() {
  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    members: '',
    location: '',
    date: '',
    session: '',
    food: ''
  });

  useEffect(() => {
    axios.get('https://65210a08a4199548356cbe00.mockapi.io/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const lastItem = data[data.length - 1]

  return (
    <main className='next-page d-flex align-items-center justify-content-center'>
      {lastItem && (
        <section className='container p-5 rounded'>
          <div className='row text-center'>
            <h1>{lastItem.name}, Your Table is successfully booked !!</h1>
            <h3>Table No: <span class="badge text-bg-danger">{lastItem.id}</span></h3>
          </div>

          <div className='row p-3 align-items-center justify-content-center'>
            <div className='col-12 col-md-6'>
              <div>
                <h3>Booked Person Details</h3>
                <p>Name: <strong>{lastItem.name}</strong></p>
                <p>Email: <strong>{lastItem.email}</strong></p>
                <p>Mobile: <strong>{lastItem.mobile}</strong></p>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <h3>Session Details</h3>
              <p>No of Members: <strong>{lastItem.members}</strong></p>
              <p>Date: <strong>{lastItem.date}</strong></p>
              <p>Location: <strong>{lastItem.location}</strong></p>
              <p>Session Booked: <strong>{lastItem.session}</strong></p>
              <p>Food type: <strong>{lastItem.food}</strong></p>
            </div>
          </div>

          <div className='row text-center'>
            <h4>Thank You For Your Booking!!</h4>
            <h5>Enjoy Your Meals</h5>
          </div>
        </section>
      )}
    </main>
  );
}

export default NextPage;