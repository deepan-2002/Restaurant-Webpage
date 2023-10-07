import { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    members: '',
    location: '',
    date: '',
    session: '',
    food: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      members: formData.members,
      location: formData.location,
      date: formData.date,
      session: formData.session,
      food: formData.food
    }

    try {
      await axios.post('https://65210a08a4199548356cbe00.mockapi.io/data', user)
      alert('User Data Submitted Successfully')

      setFormData({
        name: '',
        email: '',
        mobile: '',
        members: '',
        location: '',
        date: '',
        session: '',
        food: ''
      })
    }
    catch (error) {
      console.error(error)
      alert('An error occurred while submitting user data')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }



  return (
    <main className="main d-flex align-items-center justify-content-around">
      <div>
        <form className='row' onSubmit={handleSubmit}>
          <section className='col-12 col-md-6'>

            <div>
              <h3>Reserve a Table in Advance</h3>
              <p className='description'>
                Don't wait in line to enjoy your meal.<br />
                Reserve a table in advance with us.
              </p>
            </div>

            {/* Form fields */}
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="form-label">
                No of Members
              </label>
              <input
                type="number"
                className="form-control"
                id="members"
                name="members"
                value={formData.members}
                onChange={handleInputChange}
                required
              />
            </div>



          </section>

          <section className="section-2 col-12 col-md-6">



            <div>
              <p>Location:</p>
              <select class="form-select" aria-label="Default select example" id='location' name='location' value={formData.location} onChange={handleInputChange}>
                <option selected>Select Location</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>

            <div>
              <p>Date:</p>
              <input type="date" className="form-control" id='date' name='date' value={formData.date} onChange={handleInputChange} required/>
            </div>

            <div>
              <p>Session:</p>
              <input type="radio" class="btn-check" name="session" id="option1" value='Lunch' autocomplete="off" onChange={handleInputChange} />
              <label class="btn btn-outline-dark me-2" for="option1">Lunch</label>

              <input type="radio" class="btn-check" name="session" id="option2" value='Dinner' autocomplete="off" onChange={handleInputChange} />
              <label class="btn btn-outline-dark" for="option2">Dinner</label>
            </div>

            <div>
              <p>Veg/ Non-Veg</p>
              <input type="radio" class="btn-check" name="food" id="option3" value='Veg' autocomplete="off" onChange={handleInputChange} />
              <label class="btn btn-outline-success me-2" for="option3">Veg</label>

              <input type="radio" class="btn-check" name="food" id="option4" value='Non Veg' autocomplete="off" onChange={handleInputChange} />
              <label class="btn btn-outline-danger" for="option4">Non-Veg</label>
            </div>

            <div className='text-center'>
              <br />
              <button className='btn btn-book' type='submit'>BookTable</button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}

export default App;
