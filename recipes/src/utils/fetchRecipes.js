const apiKey = import.meta.env.VITE_OPENAI_API_KEY

export const fetchRecipesFromAI = async (prompt) => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });
  
    if (!res.ok) {
      console.error("OpenAI API error:", await res.text());
      return [];
    }
  
    const data = await res.json();
  
    try {
      const content = data.choices[0].message.content;
      const cleaned = content.replace(/```json|```/g, '').trim();
      const recipes = JSON.parse(cleaned);
      return recipes;
    } catch (error) {
      console.error("Failed to parse JSON response from AI:", error);
      return [];
    }
  };
  
