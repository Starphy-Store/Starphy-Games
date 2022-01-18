import React from "react";
import "./CardsBacanas.css";

export default function CardsBacanas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="text-center">
            <strong>STYLE 1</strong>
          </h4>
          <hr />
          <div className="profile-card-2">
            <img
              src="https://assets.puzzlefactory.pl/puzzle/260/444/original.webp"
              className="img-responsive"
            />
            <div className="background">
              <div className="profile-name">Fornite</div>
              <div className="profile-username">Epic Games</div>
              <div className="profile-icons">
                <h5>$3.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
