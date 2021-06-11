import React, { useState } from "react";
import FileBase from "react-file-base64";
import { addKitchen } from "../../apis";
import { useHistory } from "react-router-dom";
import "./form.css";
const Form = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: !e.target.selected });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addKitchen(formData, history);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row my-3">
          <div className="col-sm-12 col-lg-4" id="file">
            <div class="input-group" id="file-input">
              <FileBase
                multiple={false}
                type="file"
                onDone={({ base64 }) =>
                  setFormData({ ...formData, image: base64 })
                }
              />

              <span class="input-group-text" id="basic-addon1">
                <i className="fas fa-upload"></i>
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="owner"
              onChange={handleChange}
              placeholder="Owner Name"
              type="text"
              value={formData.owner}
              className="form-control"
              required
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-12 col-lg-4">
            <input
              name="restaurant"
              value={formData.restaurant}
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              placeholder="Kitchen Name"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="fssai"
              value={formData.fssai}
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              placeholder="FSSAI Number"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-12 col-lg-4">
            <input
              name="contact_no"
              onChange={handleChange}
              required
              value={formData.contact_no}
              type="number"
              className="form-control"
              placeholder="Phone/Mobile"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="time"
              onChange={handleChange}
              required
              value={formData.time}
              type="time"
              className="form-control"
              placeholder="Preparation Time"
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row p-1 checkboxes" style={{ width: "50%" }}>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="northEastern"
                selected={formData.northEastern}
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                North Eastern
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="southIndian"
                selected={formData.southIndian}
                onChange={handleCheckbox}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                South Indian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                selected={formData.bihari}
                name="bihari"
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Bihari
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="bengali"
                selected={formData.bengali}
                onChange={handleCheckbox}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Bengali
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                selected={formData.punjabi}
                name="punjabi"
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Punjabi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="gujarati"
                selected={formData.gujarati}
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Gujarati
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="kashmiri"
                selected={formData.kashmiri}
                onChange={handleCheckbox}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Kashmiri
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="maharashtrian"
                selected={formData.maharashtrian}
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Maharashtrian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                selected={formData.rajasthani}
                name="rajasthani"
                onChange={handleCheckbox}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
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
        <div className="d-flex justify-content-end py-3">
          <button type="submit" className="btn btn-success mx-3">
            Save
          </button>
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
