import { Attachment } from "nodemailer/lib/mailer";

 type MailOptions = {   from: string;
   to: string;
   subject: string;
   text: string;
   attachments: Attachment[];
 };

 export const sendMail = async (options: MailOptions): Promise<void> => {

  // Check if we're in a browser environment， if so, use fetch to call the API
  // Otherwise, use nodemailer directly
  if (typeof window === "undefined") {
     const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: options.from,
        pass: process.env.GOOGLE_APP_PASSWORD, 
      },
    });

    await transporter.sendMail(options);
    return;
  }

  try {
    // Client-side: use fetch to call the API
    const response = await fetch(`${window.location.origin}/api/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });

    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};