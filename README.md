# Recipes
An AI-powered web app that helps users discover recipes based on the ingredients they already have at home. Users can input ingredients manually or upload a photo of a handwritten grocery list. The app uses Azure's OCR services to extract text from images and OpenAI's API to generate customized recipes based on the user's selected cuisine type.

---
## Project Overview

- **Ingredient Input:** Enter ingredients manually or upload a photo of a handwritten list.
- **OCR Integration:** Azure AI Vision OCR extracts ingredients from uploaded images.
- **Recipe Generation:** OpenAI GPT-4 generates recipe suggestions based on your ingredients and selected cuisine.
- **Recipe Display:** Recipes are shown in styled tiles with cook time, required ingredients, and more.
- **Mobile-Friendly:** Responsive UI for use on smartphones and desktops.

---
## Features

- Upload a photo of a handwritten ingredient list (OCR-powered)
- Manual text entry of ingredients
- Select recipe category (e.g., American, Persian, Latin, Greek, Indian, etc.)
- AI-generated recipes using OpenAI's API
- Recipes displayed with:
  - Title
  - Description
  - Cook time
  - Image (if available)
  - Number of ingredients needed
---
  ## Tech Stack

| Layer      | Technology                                                                 |
|------------|----------------------------------------------------------------------------|
| Frontend   | [React](https://react.dev/), [Vite](https://vitejs.dev/)                   |
| AI & APIs  | [OpenAI GPT-4](https://platform.openai.com/), [Azure AI Vision OCR](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/) |
| Styling/UI | [Tailwind CSS](https://tailwindcss.com/)                                   |  

---
## Setup Instructions

### 1. Clone the Repository
- git clone https://github.com/Gballreich/recipes.git
- cd recipes

### 2. Install Dependencies
- npm install

### 3. Configure Environment Variables
- Create a .env file in the root of the project and add your API keys:
- VITE_AZURE_API_KEY=your_azure_vision_api_key
- VITE_OPENAI_API_KEY=your_openai_api_key

### 4. Start the Development Server
- npm run dev
- The app will be available at http://localhost:5173 (or as indicated in your terminal).
---
## How to use

### 1. Enter Ingredients:
### 2. Click "Save Ingredients" button:
### 3. Select category:
### 4. Click "Get Recipes" button:
### 5. Alternatively, choose a image of ingredients to upload and click "Save Ingredients" button, click "Get Recipes" button next to generate suggestions based on the uploaded image of ingredients.

---

## Limitations

### 1. Links returned from OpenAI
- As of now the majority of the links returned from the OpenAI call are not active and are returning a 404 error.
### 2. Manually input non-food ingredients
- There is no validation for users to enter non-food item ingredeints. A user could manually enter a bike, tv, and ceramic and the AI would try to recommend recipes based on those ingredients.
### 3. Image upload non-food ingredients
- There is no validation for users who upload and image of hand written ingredients that are non-food items, similar to #2.
### 4. Inconsistency with OCR
- The clarity of the handwritten image matters, write as clearly as possible.

---

## Future

### 1. Implement React Native for mobile phone use to uplaod/take an image from a smart phone.
### 2. Work on getting the links returned to not have 404 errors.
### 3. Generate images based on the recipes.
### 4. Add validation to the ingredients input to ensure the ingredients are food items.