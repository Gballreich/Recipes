const OCRUploadButton = ({ onOCRResult }) => {
    const handleUpload = () => {
      // TEMP: simulate OCR result
      const fakeOCR = "tomato, onion, garlic";
      onOCRResult(fakeOCR);
    };
  
    return (
      <div className="flex flex-col space-y-4 w-full">
      <input
        type="file"
        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder="e.g. eggs, spinach, garlic"
      />
      <button
        className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
        onClick={handleUpload}
      >
        Upload Handwritten List
      </button>
    </div>
    );
  };
  
  export default OCRUploadButton;
  