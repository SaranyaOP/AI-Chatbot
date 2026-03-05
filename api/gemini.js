export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("THE KEY VERCEL SEES IS:", apiKey);
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Gemini API error");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Gemini:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
}