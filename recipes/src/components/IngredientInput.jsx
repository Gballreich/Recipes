const IngredientInput = ({ rawInput, setRawInput, onSave }) => {
    return (
      <div className="flex flex-col space-y-4 w-full">
      <textarea
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white resize-none"
        placeholder="Enter ingredients separated by commas"
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
        rows={4}
      />
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg self-center"
        onClick={onSave}
      >
        Save Ingredients
      </button>
    </div>
    );
  };
  
  export default IngredientInput;
  