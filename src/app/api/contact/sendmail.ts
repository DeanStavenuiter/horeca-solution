import nodemailer from "nodemailer";

export const sendMail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
      pass: `${process.env.NEXT_PUBLIC_NODEMAILER_APP_PWD}`,
    },
  });

  const mail = {
    from: "noreply@horecasolution.nl",
    to: "ddstavenuiter@gmail.com",
    //  "info@horecasolution.nl",
    subject: `${name} wilt graag kennis maken`,
    html: `
            <h1>${name} wilt graag kennis maken met Horeca Solution!</h1> 

            <p>
            naam: ${name} <br>
            telefoon: ${phone} <br>
            email: ${email} <br>
            bericht: ${message} <br>
            </p>
            `,
  };

  try {
    await transporter.sendMail(mail);
    console.log("mail verzonden");
    return "success";
  } catch (error) {
    console.log("Error met mail sturen: ", error);
    throw new Error("Error sending email");
  }
};

export default nodemailer;
