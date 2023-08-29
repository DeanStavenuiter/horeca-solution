import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./sendmail";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body.body;

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      return NextResponse.json({
        message: "Vul alle velden in aub.",
        success: false,
      });
    }
    try {
      const response = await sendMail(
        name,
        email,
        phone,
        message
      );

      if (response === "success") {
        return NextResponse.json({
          message: "Mail is verzonden.",
          success: true,
        });
      } else {
        throw new Error("Error met mail versturen, probeer het nogmaals.");
      }
    } catch (error) {
      return NextResponse.json({
        message: "Er is iets fout gegaan probeer het nog eens.",
      });
    }
  } catch (error) {
    console.log("Error ", error);
    return NextResponse.json({
      message: "Er is iets fout gegaan probeer het nog eens.",
    });
  }
};
