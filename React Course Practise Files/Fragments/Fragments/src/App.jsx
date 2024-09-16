import FoodItems from "./Components/Fooditem";
import ErrorMsg from "./Components/Errormessage";
import Container from "./Components/Container";
import InputTab from "./Components/InputTab";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [foodItems, foodItemsState] = useState([
    "Bread",
    "Roti",
    "Ghee",
    "Milk",
    "Vegetable",
  ]);
  let inputTab = " Enter Food Name Here";
  let [textToShow, textToShowState] = useState("User Choice Food");
  const handleKey = (event) => {
    textToShowState(event.target.value);

    if (event.key === "Enter") {
      let newFoodItem = [...foodItems, event.target.value];
      foodItemsState(newFoodItem);
      textToShowState("");
    }
  };
  return (
    <>
      <Container>
        <div className="HealthyFood">Healty Food List</div>
        <InputTab inputs={inputTab} handleKey={handleKey}></InputTab>
        <p>{textToShow}</p>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Healthy Food List</p>
      </Container> */}
    </>
  );
}

export default App;
