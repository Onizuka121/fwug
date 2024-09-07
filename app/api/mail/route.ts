import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import FWUGEmailTemplate from "../../../emails";

const resend = new Resend(process.env.API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const secret = process.env.API_KEY;
    const requestSecret = req.headers.get("x-api-key");
    console.log(requestSecret);

    if (!requestSecret || requestSecret !== secret) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Recupera il corpo della richiesta e valida l'email
    const { email } = await req.json();
    console.log(email);

    if (!email || !email.includes("@") || !email.includes(".")) {
      console.log(email);
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Invia l'email utilizzando Resend
    const imageRand = getRandomImage();
    console.log(imageRand);

    const { data, error } = await resend.emails.send({
      from: "FWUG <team@fwug.org>",
      to: [email],
      subject: "Welcome to $FWUG",
      react: FWUGEmailTemplate(),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    // Gestisci eventuali errori
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// Funzione per generare un'immagine casuale
const getRandomImage = (): string => {
  const min = 10;
  const max = 20;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return `image${randomNum}.jpg`;
};
