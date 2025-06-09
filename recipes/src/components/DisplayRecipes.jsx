const DisplayRecipes = ({ recipes }) => {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md 
        border-2 border-blue-500 dark:border-blue-400 space-y-4">
        <h2 className="text-xl font-semibold text-center">Recipe Results</h2>
        {recipes.map((recipe, index) => (
          <div key={index} className="border-t pt-2">
            <p><span className="font-bold">Name:</span> {recipe.name}</p>
            <p>
                <span className="font-bold">Ingredients Needed:</span>{" "}
                {Array.isArray(recipe.ingredientsNeeded)
                ? recipe.ingredientsNeeded.join(", ")
                : String(recipe.ingredientsNeeded)}
            </p>
            <p><span className="font-bold">Cook Time:</span> {recipe.cookTime}</p>
            <p><a href={recipe.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View Recipe</a></p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayRecipes;
  
  