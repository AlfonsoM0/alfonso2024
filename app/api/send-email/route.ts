import { NextResponse } from 'next/server';
import { sendEmail, EmailParams } from '@/server/actions/sendEmail';

export async function POST(request: Request) {
  try {
    // const origin = request.headers.get('Origin');

    // if (!origin) {
    //   return NextResponse.json(
    //     { success: false, message: 'Origin header missing' },
    //     { status: 400 }
    //   );
    // }

    // const url = new URL(origin);
    // const hostname = url.hostname;

    // const loalUrl = process.env.NEXT_PUBLIC_URL_PRO as string;
    // const localDomain = new URL(loalUrl).hostname;

    // // Check if the hostname is exactly 'alfonso.ar' or ends with '.alfonso.ar'
    // if (hostname !== localDomain && !hostname.endsWith(`.${localDomain}`)) {
    //   return NextResponse.json({ success: false, message: 'Unauthorized origin' }, { status: 403 });
    // }

    const emailParams: EmailParams = await request.json();

    console.log('Email Params:', emailParams);

    // Validate the incoming data if necessary, though EmailParams type helps
    // For a simple implementation, we'll pass it directly

    const success = await sendEmail(emailParams);

    console.log('Email sent successfully:', success);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in send-email API route:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
