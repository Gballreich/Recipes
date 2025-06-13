import { useState } from "react";

const OCRUploadButton = ({ setIngredients }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image file first.");
      return;
    }

    setLoading(true);

    try {
      const endpoint = "https://ai-ballreichgarrett-3085.cognitiveservices.azure.com/";
      const apiKey = import.meta.env.VITE_AZURE_API_KEY;
      const url = `${endpoint}computervision/imageanalysis:analyze?api-version=2023-10-01&features=Read`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Ocp-Apim-Subscription-Key": apiKey,
        },
        body: file,
      });

      const result = await res.json();
      console.log("Azure OCR Response:", result);

      const lines = result?.readResult?.blocks?.flatMap((block) =>
        block.lines.map((line) => line.text)
      );

      const combinedText = lines?.join("\n") || "";
      const parsedIngredients = combinedText
        .split(/[\n,-]+/)
        .map((item) => item.trim())
        .filter((item) => item);

      setIngredients((prev) => [...new Set([...prev, ...parsedIngredients])]);
    } catch (err) {
      console.error("Error processing image:", err);
      alert("There was an error analyzing the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white"
      />
      <button
        onClick={handleUpload}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Handwritten List"}
      </button>
    </div>
  );
};

export default OCRUploadButton;


  