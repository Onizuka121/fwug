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

    if (!requestSecret || requestSecret !== secret) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Recupera il corpo della richiesta e valida l'email
    const { email } = await req.json();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // check if the contact exists in audience yet
    const resultCheckingAndAdd = await checkAndAddContact(email);

    if (resultCheckingAndAdd) {
      // Invia l'email utilizzando Resend
      const { data, error } = await resend.emails.send({
        from: "FWUG <team@fwug.org>",
        to: [email],
        subject: "Welcome to $FWUG",
        react: FWUGEmailTemplate()
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { error: "Email already registered in our newsletter" },
        { status: 500 }
      );
    }
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

const audienceId = "a868361f-1af0-43fe-acf8-2448efe7e47e";

async function addContact(email: string) {
  try {

    
    // Crea un nuovo contatto
    const response = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });

    // Mostra il risultato della creazione del contatto
    console.log("New contact added in audience :", response);
  } catch (error) {
    console.error("Error in adding contact -> :", error);
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkIfEmailExists(audienceId: string, emailToFind: string) {
  try {
    const list = await resend.contacts.list({
      audienceId: audienceId,
    });

    await delay(3000);

    if (list && list.data && list.data.data && list.data.data.length > 0) {
      const contactExists = list.data.data.some(
        (contact) => contact.email === emailToFind
      );
      return contactExists;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error in retrieve list contact -> :", error);
    return false;
  }
}

async function checkAndAddContact(email: string) {
  try {
    const isEmailRegistered = await checkIfEmailExists(audienceId, email);

    if (isEmailRegistered) {
      console.log(`L'email ${email} è già registrata.`);
      return false; // Ritorna false se l'email è già presente
    } else {
      await addContact(email);
      await delay(3000)
      return true; // Ritorna true se l'email è stata aggiunta con successo
    }
  } catch (error) {
    console.error("Errore durante l'operazione ->", error);
    return false; // Ritorna false in caso di errore
  }
}
