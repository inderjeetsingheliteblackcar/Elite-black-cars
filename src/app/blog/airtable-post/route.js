import Airtable from 'airtable';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, description, content, imageUrl } = await request.json();

    const base = new Airtable({ 
      apiKey: process.env.AIRTABLE_API_KEY 
    }).base(process.env.AIRTABLE_BASE_ID);

    const records = await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Name: name,
          Description: description,
          Content: content,
          Image: imageUrl ? [{ url: imageUrl }] : []
        }
      }
    ]);

    return NextResponse.json({ 
      success: true, 
      record: records[0] 
    });
    
  } catch (error) {
    console.error('Error saving to Airtable:', error);
    return NextResponse.json(
      { message: 'Error saving data', error: error.message },
      { status: 500 }
    );
  }}