const GetRecipesButton = ({ disabled, onClick }) => {
    return (
      <div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            disabled={disabled} onClick={onClick}>
          Get Recipes
        </button>
      </div>
    );
  };
  
  export default GetRecipesButton;
  