import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllKitchens } from "../../apis";
import Kitchen from "./Kitchen";
import "./Kitchens.css";
const Kitchens = () => {
  const [kitchens, setKitchens] = useState([]);
  useEffect(() => {
    getAllKitchens().then((data) => {
      setKitchens(data);
    });
  }, []);
  return (
    <div className="kitchens container mt-3">
      <div className="kitchens__form d-flex justify-content-between">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="kitchen__form__interactions">
          <i className="fas fa-sliders-h fa-2x"></i>
          <Link
            to="/kitchen/addKitchen"
            className="kitchen__form__interactions__plusContainer"
          >
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
      {kitchens?.map((kitchen, index) => (
        <Link
          key={kitchen._id}
          to={`/kitchen/editKitchen/${kitchen._id}`}
          className="kitchens__items mt-2"
        >
          <Kitchen index={index + 1} kitchen={kitchen} />
        </Link>
      ))}
    </div>
  );
};

export default Kitchens;
