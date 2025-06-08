import './App.css';
import DisplayIngredients from './components/DisplayIngredients';
import MainInput from "./components/MainInput";
import { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
        {/* Left empty column */}
        <div></div>

        {/* Middle column */}
        <div>
          <MainInput ingredients={ingredients} setIngredients={setIngredients} />
        </div>

        {/* Right column */}
        <div>
          {ingredients.length > 0 && (
            <DisplayIngredients ingredients={ingredients} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
