import './App.css'

function App() {
  return (
    <main className="main d-flex align-items-center justify-content-around">
      <div>
      <form className='row'>
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
              id="age"
              name="age"

              required
            />
          </div>
          
          
          
        </section>

        <section className="section-2 col-12 col-md-6">

          

          <div>
            <p>Location:</p>
            <select class="form-select" aria-label="Default select example">
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
            <input type="date" className="form-control" />
          </div>

          <div>
            <p>Session:</p>
            <input type="radio" class="btn-check" name="options-base" id="option1" autocomplete="off" checked />
            <label class="btn btn-outline-dark me-2" for="option1">Lunch</label>

            <input type="radio" class="btn-check" name="options-base" id="option2" autocomplete="off" />
            <label class="btn btn-outline-dark" for="option2">Dinner</label>
          </div>

          <div>
            <p>Veg/ Non-Veg</p>
            <input type="radio" class="btn-check" name="food" id="option3" autocomplete="off"/>
            <label class="btn btn-outline-success me-2" for="option3">Veg</label>

            <input type="radio" class="btn-check" name="food" id="option4" autocomplete="off" />
            <label class="btn btn-outline-danger" for="option4">Non-Veg</label>
          </div>

          <div className='text-center'>
            <br/>
            <button className='btn btn-book' type='submit'>BookTable</button>
          </div>
        </section>
      </form>
      </div>
    </main>
  );
}

export default App;
