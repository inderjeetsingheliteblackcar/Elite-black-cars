export async function GET() {
  const API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;
  const URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },

      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();
    return Response.json({ success: true, data: data.records });
  } catch (error) {
    console.error("Error fetching from Airtable:", error);
    return Response.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
