// api/translate.js
export default async function handler(req, res) {
  // Permitir solo POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Obtener el cuerpo correctamente
  const { text, targetLang } = req.body || {};

  if (!text || !targetLang) {
    res.status(400).json({ error: "Missing required parameters" });
    return;
  }

  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `DeepL-Auth-Key ${process.env.VITE_DEEPL_API_KEY}`,
      },
      body: new URLSearchParams({
        text,
        target_lang: targetLang,
      }),
    });

    const data = await response.json();

    // Asegurar que sea JSON válido
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}