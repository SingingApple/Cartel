/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getKitchenById } from "../../apis/index";

import "./EditForm.css";
const EditForm = () => {
  const params = useParams();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    getKitchenById(params.id).then((data) => {
      setFormData(data);
    });
  }, [params.id]);
  console.log(formData);
  const handleChange = (e) => {};
  const handleCheckbox = (e) => {};

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="form__header">
        <img
          src="https://pbs.twimg.com/media/EtDVfFGUwAAxz-Y.jpg"
          alt="image"
          className="img-thumbnail"
        />
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
      <form>
        <div className="row my-3">
          <div className="col">
            <div class="input-group" id="file">
              <input
                type="text"
                value={formData.restaurant}
                style={{ borderRight: "none" }}
                className="form-control "
                placeholder="Restaurant"
              />
            </div>
          </div>
          <div className="col">
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
          <div className="col">
            <input
              name="Address"
              onChange={handleChange}
              type="text"
              value={formData.location}
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
              value={formData.restaurant}
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
              value={formData.email}
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
              value={formData.cost}
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              placeholder="Phone/Mobile"
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row p-1" style={{ width: "80%" }}>
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

export default EditForm;
