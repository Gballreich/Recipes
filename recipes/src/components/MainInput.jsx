import { useState } from "react";
import IngredientInput from "./IngredientInput";
import CategoryDropdown from "./CategoryDropdown";
import GetRecipesButton from "./GetRecipesButton";
import OCRUploadButton from "./OCRUploadButton";
import { fetchRecipesFromAI } from "../utils/fetchRecipes";




const MainInput = ({ ingredients, setIngredients,setRecipes }) => {
  const [rawInput, setRawInput] = useState("");
  const [category, setCategory] = useState("All");



  const handleSaveIngredients = () => {
    const parsed = rawInput
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");

    if (parsed.length === 0) return; // don't update if no valid input

    setIngredients(prev => {
      const updated = [...new Set([...prev, ...parsed])]; // remove duplicates
      console.log("Ingredients array:", updated);
      return updated;
    });
    setRawInput(""); // clear input after saving
  };

  const handleGetRecipes = async () => {
    const prompt = category === "All"
      ? `Suggest 5 unique recipes based on these ingredients: ${ingredients.join(", ")}. 
          Respond with ONLY JSON format including name, ingredientsNeeded (only what’s needed from the user), cookTime, and link.`
      : `Suggest 5 ${category} recipes based on these ingredients: ${ingredients.join(", ")}. 
          Respond in ONLY JSON with name, ingredientsNeeded, cookTime, and link.`;
  
    console.log("Prompt sent to AI:", prompt);
  
    const recipes = await fetchRecipesFromAI(prompt);
    console.log("Recipes received:", recipes);
  
    // TODO: Store in state when ready to render them
    if (Array.isArray(recipes)) {
      setRecipes(recipes);
    }
  };

  const handleOCRResult = (ocrText) => {
    const newIngredients = ocrText
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");
    setIngredients(prev => [...prev, ...newIngredients]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-2xl 
    space-y-4 border-2 border-blue-500 dark:border-blue-400 pb-5">
      <IngredientInput
        rawInput={rawInput}
        setRawInput={setRawInput}
        onSave={handleSaveIngredients}
      />
      <CategoryDropdown
        category={category}
        setCategory={(newCategory) => {
          console.log("Selected category: ", newCategory);
          setCategory(newCategory);
        }}
      />
      <GetRecipesButton
        disabled={ingredients.length === 0}
        onClick={handleGetRecipes}
      />
      <OCRUploadButton onOCRResult={handleOCRResult} />
    </div>
  );
};

export default MainInput;
