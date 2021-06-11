import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import ToggleButton from "react-toggle-button";
import "./kitchen.css";
const Kitchen = ({
  index,
  kitchen: { owner, email, location, contact_no, cost, rating },
}) => {
  const [toggle, setToggle] = useState(true);
  console.log(owner);
  return (
    <div className="kitchen">
      <table className="table" style={{ border: "2px solid #c3c3c3" }}>
        <tbody>
          <tr
            className="d-flex align-items-center justify-content-between"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <td>{index}</td>
            <td>{owner}</td>
            <td style={{ textAlign: "center" }}>
              <i className="fas fa-map-marked-alt"></i>
              {location}
            </td>
            <td>
              {" "}
              <ReactStars
                count={5}
                value={rating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </td>
            <td>{email}</td>
            <td>{contact_no}</td>
            <td>Rs {cost}</td>
            <td>
              <ToggleButton
                value={toggle}
                onToggle={() => setToggle(!toggle)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Kitchen;
