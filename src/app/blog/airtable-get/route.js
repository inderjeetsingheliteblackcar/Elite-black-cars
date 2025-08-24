export async function GET() {
  const API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;
  
  // Check if environment variables are set
  if (!API_KEY || !BASE_ID || !TABLE_NAME) {
    console.error('Missing Airtable environment variables');
    return Response.json(
      { success: false, error: "Server configuration error" },
      { status: 500 }
    );
  }

  const URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Airtable API error: ${response.status} - ${errorText}`);
      return Response.json(
        { success: false, error: `Airtable API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json({ successtestingdata: true, data: data.records });
  } catch (error) {
    console.error("Error fetching from Airtable:", error.message);
    return Response.json(
      { success: false, error: "Failed to fetch data from Airtable" },
      { status: 500 }
    );
  }
}
