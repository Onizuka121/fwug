'use server'

export async function sendMail(email) {
    console.log(process.env.API_KEY,email);

    const response = await fetch(`https://www.fwug.org/api/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY || "", // Assicurati che questa sia impostata nel server
      },
      body: JSON.stringify({email}), // Corpo JSON con l'email
    });
  
    const result = await response.json()
  
    return result;
    
}