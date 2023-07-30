import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const sendMail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
      pass: `${process.env.NEXT_PUBLIC_NODEMAILER_APP_PWD}`, // link: https://support.google.com/accounts/answer/185833?hl=en
    },
  });

  const mail = {
    from: "",
    to:
       "info@horecasolution.nl",
    //   "ddstavenuiter@gmail.com",
    subject: `${name} wilt graag kennis maken`,
    html: `
            <h1>${name} wilt graag kennis maken met Horeca Solution!</h1> 

            <p>
            naam: ${name} <br>
            telefoon: ${phone} <br>
            email: ${email} <br>
            bericht: ${message} <br>
              `,
  };

  try {
    await transporter.sendMail(mail);
    console.log("Mail gestuurd!");
  } catch (error) {
    console.log("Error met mail sturen: ", error);
    return NextResponse.json({
      message:
        "Er is iets fout gegaan met het versturen van de mail, probeer het nog eens.",
    });
  }
};

export default nodemailer;
