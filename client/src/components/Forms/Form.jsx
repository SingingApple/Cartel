import React from "react";
import "./form.css";
const Form = () => {
  const handleChange = (e) => {};
  const handleCheckbox = (e) => {};

  return (
    <div className="container mt-5">
      <form>
        <div className="row my-3">
          <div className="col">
            <div class="input-group" id="file">
              <input
                type="text"
                style={{ borderRight: "none" }}
                className="form-control "
                placeholder="Upload Picture"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text" id="basic-addon1">
                <i className="fas fa-upload"></i>
              </span>
            </div>
          </div>
          <div className="col">
            <input
              name="owner"
              onChange={handleChange}
              placeholder="Owner Name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              name="Address"
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <input
              name="Kitchen Name"
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              placeholder="Kitchen Name"
            />
          </div>
          <div className="col">
            <input
              name="Email"
              onChange={handleChange}
              required
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col">
            <input
              name="owner"
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              placeholder="FSSAI Number"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <input
              name="owner"
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              placeholder="Phone/Mobile"
            />
          </div>
          <div className="col">
            <input
              name="owner"
              onChange={handleChange}
              required
              type="time"
              className="form-control"
              placeholder="Preparation Time"
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row p-3" style={{ width: "80%" }}>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="northEastern"
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                North Eastern
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                South Indian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Bihari
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Bengali
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Punjabi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Gujarati
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Kashmiri
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Maharashtrian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Rajasthani
              </label>
            </div>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col"></div>
          <div className="col">
            <h5>Breakfast</h5>
            {/* <div>
              <input className="form-control" type="text" />
            </div>
            <div>
              <input className="form-control" type="text" />
            </div>
          </div> */}
          </div>
          <div className="col">
            <h5>Lunch</h5>
          </div>
          <div className="col">
            <h5>High Tea</h5>
          </div>
          <div className="col">
            <h5>Dinner</h5>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">Order From</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="06:30 AM"
            />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">Order To</div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder=" 06:30 AM"
            />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end py-3">
        <button type="button" className="btn btn-success mx-3">
          Save
        </button>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Form;
