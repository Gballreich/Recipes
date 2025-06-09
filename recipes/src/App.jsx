import './App.css';
import DisplayIngredients from './components/DisplayIngredients';
import DisplayRecipes from './components/DisplayRecipes';
import MainInput from "./components/MainInput";
import { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Recipe Finder
      </h1>

      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
        {/* DisplayRecipes */}
        <div className="w-full">
          {recipes.length > 0 && <DisplayRecipes recipes={recipes} />}
      </div>

        {/* MainInput */}
        <div className="w-full">
          <MainInput 
            ingredients={ingredients} 
            setIngredients={setIngredients}
            setRecipes={setRecipes}
             />
        </div>

        {/* DisplayIngredients */}
        <div className="w-full">
          {ingredients.length > 0 && (
            <DisplayIngredients ingredients={ingredients} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
