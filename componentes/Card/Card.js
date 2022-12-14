import React from "react";

import "./Card.css";

export class Card extends React.Component {
  render() {
    const { name, image, status, lastLocation, firstSeen } = this.props;

    const statusStr = status.toString().toLowerCase();
    console.log(statusStr);

    return (
      <div>
        <div className="card">
          <div className="cardImage">
            <img src={image} alt={name} />
          </div>
          <div className="cardBody">
            <div className="cardTitle">{name}</div>
            <div className="status">
              <ul>
                <li className={status}>{status}</li>
              </ul>
            </div>
            <div className="cardInfo">
              Last Location
              <p>{lastLocation}</p>
              First Seen
              <p>{firstSeen}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
