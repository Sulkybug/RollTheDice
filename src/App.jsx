import { useState } from "react";
import dices from "./Components/Dices.jsx";
import "./App.css";
import Select from "react-select";
import { ImgDices } from "./Components/imgDices.jsx";

function App() {
  const optionsDices = [
    { value: 1, label: "One 🎲" },
    { value: 2, label: "Two 🎲" },
    { value: 3, label: "Three 🎲" },
  ];

  const diceType = [
    { value: 4, label: "4 Sided" },
    { value: 6, label: "6 Sided" },
  ];

  const [diceOne, setDiceOne] = useState(`${Object.keys(dices)[0]}`);
  const [diceOneVal, setDiceOneVal] = useState(
    Number(`${Object.values(dices)[0]}`)
  );
  const [diceTwo, setDiceTwo] = useState(`${Object.keys(dices)[0]}`);
  const [diceTwoVal, setDiceTwoVal] = useState(
    Number(`${Object.values(dices)[0]}`)
  );
  const [diceThree, setDiceThree] = useState(`${Object.keys(dices)[0]}`);
  const [diceThreeVal, setDiceThreeVal] = useState(
    Number(`${Object.values(dices)[0]}`)
  );

  const [NumbOfSides, setNumbOfSides] = useState(6);
  const [NumbOfDices, setNumbOfDices] = useState(1);

  const [buttonStatus, setButtonStatus] = useState(false);

  const changeSides = (e) => {
    setNumbOfSides(e.value);
    if (e.value == 4) {
      setDiceOne(Object.keys(dices)[6]);
      setDiceOneVal(Object.values(dices)[6]);
      setDiceTwo(Object.keys(dices)[6]);
      setDiceTwoVal(Object.values(dices)[6]);
      setDiceThree(Object.keys(dices)[6]);
      setDiceThreeVal(Object.values(dices)[6]);
    } else {
      setDiceOne(Object.keys(dices)[0]);
      setDiceOneVal(Object.values(dices)[0]);
      setDiceTwo(Object.keys(dices)[0]);
      setDiceTwoVal(Object.values(dices)[0]);
      setDiceThree(Object.keys(dices)[0]);
      setDiceThreeVal(Object.values(dices)[0]);
    }
  };

  const changeDices = (e) => {
    setNumbOfDices(e.value);
    if (NumbOfSides == 4) {
      setDiceTwo(Object.keys(dices)[6]);
      setDiceTwoVal(Object.values(dices)[6]);
      setDiceThree(Object.keys(dices)[6]);
      setDiceThreeVal(Object.values(dices)[6]);
    } else {
      setDiceTwo(Object.keys(dices)[0]);
      setDiceTwoVal(Object.values(dices)[0]);
      setDiceThree(Object.keys(dices)[0]);
      setDiceThreeVal(Object.values(dices)[0]);
    }
  };

  const throwDice = () => {
    setButtonStatus(true);
    let x = random();
    animationDices(setDiceOne, setDiceOneVal, x);

    let y = random();
    animationDices(setDiceTwo, setDiceTwoVal, y);

    let z = random();
    animationDices(setDiceThree, setDiceThreeVal, z);
  };

  const random = () => {
    if (NumbOfSides == 4) {
      return Math.floor(Math.random() * 4 + 6);
    }
    return Math.floor(Math.random() * 6);
  };

  const animationDices = (setDiceNum, setDiceNumVal, letter) => {
    let interval = 500;
    let audioEffectOne = new Audio();
    let audioEffect = new Audio();
    audioEffect.src = "/RollTheDice/audio/SoundEffectsDices.mp3";
    audioEffectOne.src = "/RollTheDice/audio/OneDiceSound.mp3";
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        if ((i = 1)) {
          if (NumbOfDices == 1) {
            audioEffectOne.play();
          } else {
            audioEffect.play();
          }
        }
        setDiceNum(Object.keys(dices)[random()]);
      }, (interval += 90));
    }
    setTimeout(() => {
      setDiceNum(Object.keys(dices)[letter]);
      setDiceNumVal(Object.values(dices)[letter]);
      setButtonStatus(false);
    }, (interval += 100));
  };

  const sumTotal = () => {
    switch (NumbOfDices) {
      case 1:
        return diceOneVal;
      case 2:
        return diceOneVal + diceTwoVal;
      case 3:
        return diceOneVal + diceTwoVal + diceThreeVal;
    }
  };

  return (
    <>
      <ImgDices
        diceOne={diceOne}
        diceTwo={diceTwo}
        NumbOfDices={NumbOfDices}
        diceThree={diceThree}
      />

      <Select
        name="typeofDices"
        id="typeofDices"
        options={diceType}
        onChange={changeSides}
        placeholder="Type of Dice"
      />
      <Select
        name="NumbOfDices"
        id="NumbOfDices"
        options={optionsDices}
        onChange={changeDices}
        placeholder="Numb of 🎲"
      />

      <button
        onClick={() => {
          throwDice();
        }}
        disabled={buttonStatus}
      >
        Roll The Dice
      </button>
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
    </>
  );
}

export default App;
