const DisplayIngredients = ({ ingredients }) => {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-md w-full 
        space-y-4 border-2 border-blue-500 dark:border-blue-400 pb-5">
        <h2 className="text-xl font-bold">Saved Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default DisplayIngredients;
  
  