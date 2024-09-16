import Display from "./Components/DisplayContainer";
import ButtonContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const buttonClick = (buttontext) => {
    console.log(buttontext);
    let newVal;
    if (buttontext === "C") {
      setValue("");
    } else if (buttontext === "=") {
      let result = eval(value);
      setValue(result);
    } else {
      newVal = value + buttontext;
      setValue(newVal);
    }
  };
  return (
    <>
      <div className={`${styles.calContainer}`}>
        <Display calVal={value}></Display>
        <ButtonContainer buttonClick={buttonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
