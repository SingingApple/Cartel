import React from "react";
import ReactStars from "react-rating-stars-component";

const Kitchen = () => {
  return (
    <div className="kitchen">
      <table class="table" style={{ border: "2px solid #c3c3c3" }}>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td>1</td>
            <td>Radha Kitchen</td>
            <td style={{ textAlign: "center" }}>
              <i className="fas fa-map-marked-alt"></i>
              Pimple Saudagar <br /> Srinagar
            </td>
            <td>
              {" "}
              <ReactStars
                count={5}
                value={4}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              ,
            </td>
            <td>radha@gmail.com</td>
            <td>9839111222</td>
            <td>Rs 19000</td>
            <td>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                />
                <label className="custom-control-label" for="customSwitch1">
                  Toggle this switch element
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Kitchen;
