/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { editKitchen, getKitchenById } from "../../apis/index";

import "./EditForm.css";
const EditForm = () => {
  const params = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    getKitchenById(params.id).then((data) => {
      setFormData(data);
    });
  }, [params.id]);
  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: !e.target.selected });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editKitchen(formData, history, params.id);
  };

  return (
    <div className="container">
      <div className="form__header">
        <img src={formData.image} alt="image" className="img-thumbnail" />
        <button type="button" className="btn btn-danger">
          Kitchen Details
        </button>
        <button type="button" className="btn btn-outline-danger">
          Menu Details
        </button>
        <button type="button" className="btn btn-outline-danger">
          Ratings
        </button>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row my-3">
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
              onChange={handleChange}
              type="text"
              value={formData.location}
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="kitchen"
              onChange={handleChange}
              required
              value={formData.restaurant}
              type="text"
              className="form-control"
              placeholder="Kitchen Name"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-12 col-lg-4">
            <input
              name="email"
              onChange={handleChange}
              required
              value={formData.email}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="fssai"
              onChange={handleChange}
              required
              value={formData.fssai}
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
              value={formData.contact_no}
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              placeholder="Phone/Mobile"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <input
              name="cost"
              onChange={handleChange}
              required
              value={formData.cost}
              type="number"
              className="form-control"
              placeholder="Price"
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
                defaultChecked={formData.northEastern}
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
                defaultChecked={formData.southIndian}
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
                defaultChecked={formData.bihari}
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
                defaultChecked={formData.bengali}
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
                defaultChecked={formData.punjabi}
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
                defaultChecked={formData.gujarati}
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
                defaultChecked={formData.kashmiri}
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
                defaultChecked={formData.maharashtrian}
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
                defaultChecked={formData.rajasthani}
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
          <button
            type="reset"
            className="btn btn-danger"
            onClick={() => setFormData({})}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
