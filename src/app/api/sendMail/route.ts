import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { from, to, subject, text, attachments } = await req.json();

  // 验证环境变量
  if (!process.env.GOOGLE_APP_PASSWORD) {
    return NextResponse.json(
      { error: 'Mail server not configured' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: from,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}