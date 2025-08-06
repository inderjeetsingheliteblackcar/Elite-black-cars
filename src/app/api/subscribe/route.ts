// src/app/api/subscribe/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "b05226fb9d8fe2c5299c140315a8604d-us1";
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID! || "6509663bea";
const SERVER_PREFIX = MAILCHIMP_API_KEY.split('-')[1]; // e.g., 'us21'

export async function POST(req: NextRequest) {
  const { firstname, email, phoneNumber, radioOption, message } = await req.json();
  if (!firstname || !email || !phoneNumber || !radioOption || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  };
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FULLNAME: firstname,
      PHONE: phoneNumber,
      WHOYOU: radioOption,
      MESSAGE: message,
    },
  };

  try {
    const response = await axios.post(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({ message: 'Subscribed successfully', data: response.data }, { status: 200 });
 } catch (error: any) {
  console.error('MAILCHIMP ERROR:', error.response?.data);

  const mailchimpError = error.response?.data?.title || 'Something went wrong. Please try again later.';

  return NextResponse.json(
    { message: mailchimpError },
    { status: error.response?.status || 500 }
  );
}

}
