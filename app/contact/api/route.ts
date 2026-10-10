
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    
    const body: unknown = await request.json();
    
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { message: "Invalid request." },
        { status: 400 },
      );
    }
    
    const data = body as Record<string, unknown>;
    const { name, email, company, service, message } = data;


    if (!apiKey || !email || !to) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }


    if (
      !isString(name) ||
      !isString(email) ||
      !isString(company) ||
      !isString(service) ||
      !isString(message)
    ) {
      return NextResponse.json(
        { message: "Please provide valid form details." },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCompany = company.trim();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 100 ||
      !emailRegex.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      cleanCompany.length > 150 ||
      cleanService.length > 100 ||
      cleanMessage.length < 20 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        { message: "Please check your form details and try again." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: email,
      to: [to],
      replyTo: cleanEmail,
      subject: `New website enquiry from ${cleanName}`,
      html: `
        <h2>New Inditechies Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Company:</strong> ${escapeHtml(cleanCompany || "Not provided")}</p>
        <p><strong>Service of interest:</strong> ${escapeHtml(cleanService)}</p>
        <h3>Message</h3>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}</p>
      `,
      text: [
        "New Inditechies Website Enquiry",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Company: ${cleanCompany || "Not provided"}`,
        `Service: ${cleanService}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Contact email delivery request failed:", result.error);

      return NextResponse.json(
        { message: "Unable to send your enquiry right now." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: "Your enquiry has been submitted successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form request failed:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
