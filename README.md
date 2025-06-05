# Recipes
An AI-powered web app that helps users discover recipes based on the ingredients they already have at home. Users can input ingredients manually or upload a photo of a handwritten grocery list. The app uses Azure's OCR services to extract text from images and OpenAI's API to generate customized recipes based on the user's selected cuisine type.

---
## Example Use Case

1. User uploads a photo of handwritten ingredients using their phone.
2. Azure Vision API extracts ingredient text.
3. User selects a recipe category (e.g., Italian, Greek, Mexican).
4. OpenAI generates several recipe suggestions with images, cook time, and any extra ingredients needed.
5. Recipes can be downloaded, saved, or shared.

---
## Features

- Upload a photo of handwritten
- Manual text entry of ingredients as a fallback
- Select recipe category (e.g., American, Persian, Latin, Greek)
- AI-generated recipes using OpenAI's API
- Displays recipes in styled tiles with:
  - Title
  - Description
  - Cook time
  - Image
  - Number of ingredients needed
- Mobile-friendly UI (smartphones)
- Download/share/email recipes

  ## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | [React](https://react.dev/), [Vite](https://vitejs.dev/) |
| AI & APIs | [OpenAI GPT-4](https://platform.openai.com/), [Azure AI Vision (OCR)](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Styling/UI | [Tailwind](https://tailwindcss.com/) |
| Hosting | [Vercel](https://vercel.com/) |

---