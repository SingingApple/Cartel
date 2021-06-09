import React from "react";
import { Link } from "react-router-dom";
import Kitchen from "./Kitchen";
import "./Kitchens.css";
const Kitchens = () => {
  return (
    <div className="kitchens container mt-3">
      <div className="kitchens__form d-flex justify-content-between">
        <div class="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <Link to="/new" className="kitchen__form__interactions">
          <i class="fas fa-sliders-h fa-2x"></i>
          <span className="kitchen__form__interactions__plusContainer">
            <i className="fas fa-plus"></i>
          </span>
        </Link>
      </div>
      <div className="kitchens__items mt-2">
        <Kitchen />
        <Kitchen />
      </div>
    </div>
  );
};

export default Kitchens;
