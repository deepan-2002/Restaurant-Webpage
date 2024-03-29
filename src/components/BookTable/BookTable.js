import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BookTable.css'

function BookTable() {
    const [formData, setFormData] = useState({
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

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://65210a08a4199548356cbe00.mockapi.io/users', formData);
            console.log('Data posted successfully:', response.data);
        }
        catch (error) {
            console.error('Error posting data:', error);
            alert('Something went wrong, Please try again!')
        }

        navigate('/response',{state:{formData}})
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <main className="main d-flex align-items-center justify-content-around">
            <div>
                <form className='row justify-content-center' onSubmit={handleSubmit}>
                    <section className='col-12 col-md-6'>

                        <div>
                            <h3>Reserve a Table in Advance</h3>
                            <p className='description'>
                                Don't wait in line to enjoy your meal.<br />
                                Reserve a table in advance with us.
                            </p>
                        </div>

                        <div>
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Your Name'
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
                                placeholder='Enter Your Mail ID'
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
                                placeholder='Enter Your Mobile Number'
                                className="form-control"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="members" className="form-label">
                                No of Members
                            </label>
                            <input
                                type="number"
                                placeholder='Enter the No Of Members'
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
                            <select className="form-select" aria-label="Default select example" id='location' name='location' value={formData.location} onChange={handleInputChange}>
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
                            <input type="date" className="form-control" id='date' name='date' value={formData.date} onChange={handleInputChange} required />
                        </div>

                        <div>
                            <p>Session:</p>
                            <input type="radio" className="btn-check" name="session" id="option1" value='Lunch' autocomplete="off" onChange={handleInputChange} />
                            <label className="btn btn-outline-dark me-2" for="option1">Lunch</label>

                            <input type="radio" className="btn-check" name="session" id="option2" value='Dinner' autocomplete="off" onChange={handleInputChange} />
                            <label className="btn btn-outline-dark" for="option2">Dinner</label>
                        </div>

                        <div>
                            <p>Veg/ Non-Veg</p>
                            <input type="radio" className="btn-check" name="food" id="option3" value='Vegetarian' autocomplete="off" onChange={handleInputChange} />
                            <label className="btn btn-outline-success me-2" for="option3">Veg</label>

                            <input type="radio" className="btn-check" name="food" id="option4" value='Non-Vegetarian' autocomplete="off" onChange={handleInputChange} />
                            <label className="btn btn-outline-danger" for="option4">Non-Veg</label>
                        </div>

                        <br />

                        <div className='text-center'>
                            <button className='btn btn-book' type='submit'>BookTable</button>
                        </div>
                    </section>
                </form>
            </div>
        </main>
    );
}

export default BookTable;