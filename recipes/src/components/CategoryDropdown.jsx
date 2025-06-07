const CategoryDropdown = ({ category, setCategory }) => {
    const options = [
      "All", "Chinese", "Mexican", "Italian", "Japanese",
      "Indian", "Thai", "Korean", "French", "Spanish", "Greek", "Vegetarian"
    ];
  
    return (
      <div>
        <label>Recipe Category: </label>
        <select className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white"
            value={category} onChange={(e) => setCategory(e.target.value)}>
           
          {options.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CategoryDropdown;
  