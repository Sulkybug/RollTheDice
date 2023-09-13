import React from "react";
import "./ImgDices.css";

export const ImgDices = ({ diceOne, diceTwo, NumbOfDices, diceThree }) => {
  return (
    <div className="dicesBox">
      <img src={diceOne} alt="Dice One" />
      <img
        src={diceTwo}
        className={NumbOfDices == 1 ? "hidden" : "visible"}
        alt="Dice Two"
      />
      <img
        src={diceThree}
        alt="Dice Three"
        className={
          (NumbOfDices == 1) | (NumbOfDices == 2) ? "hidden" : "visible"
        }
      />
    </div>
  );
};
