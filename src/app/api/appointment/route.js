import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Prevents raw user input from breaking the email's HTML structure
function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, date, time, department, doctor, reason, company } = body;

    // Honeypot: if this hidden field is filled, silently reject as spam
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!fullName || !phone || !email || !date || !time || !department || !doctor) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"HealthFirst Hospital Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `New Appointment Request — ${fullName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(time)}</p>
        <p><strong>Department:</strong> ${escapeHtml(department)}</p>
        <p><strong>Preferred Doctor:</strong> ${escapeHtml(doctor)}</p>
        <p><strong>Reason for Visit:</strong> ${escapeHtml(reason) || "Not specified"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment email error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}