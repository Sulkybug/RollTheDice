import React from "react";
import "./Description.css";

export const Description = ({
  sumTotal,
  NumbOfDices,
  diceOne,
  diceTwo,
  diceThree,
}) => {
  return (
    <div>
      <h1>Total : {sumTotal()}</h1>
      <h2 className={NumbOfDices == 1 ? "hidden" : "visible"}>
        {diceOne == diceTwo &&
        diceOne == diceThree &&
        diceTwo == diceThree &&
        NumbOfDices == 3
          ? "🎲Triplet🎲"
          : diceOne == diceTwo && NumbOfDices == 2
          ? "🎲Doublet🎲"
          : (diceOne == diceTwo) |
              (diceOne == diceThree) |
              (diceTwo == diceThree) && NumbOfDices == 3
          ? "🎲Doublet🎲"
          : "-"}
      </h2>
    </div>
  );
};
