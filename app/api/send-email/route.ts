import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: 465, // Use 465 for SSL, or 587 for TLS
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`, // sender address
      to: process.env.EMAIL_TO, // list of receivers
      replyTo: email, // Set the reply-to to the user's email
      subject: `New Portfolio Message from ${name}`, // Subject line
      text: message, // plain text body
      html: `
        <h2>New Message from your Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json({ 
      message: 'Failed to send email.', 
      error: errorMessage 
    }, { status: 500 });
  }
}