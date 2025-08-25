import type { RequestHandler } from "@sveltejs/kit";
import { Resend } from "resend";
import { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY) //ANCHOR - Hay que mirar de donde coger la key
export const POST: RequestHandler = async ({ request }) => {
   try{

       const { nombre, telefono, email, mensaje } = await request.json();
       
       if (!nombre || !telefono || !email || !mensaje) {
        return new Response(JSON.stringify({ error: "Faltan campos obligatorios" }), { status: 400 });
       }

       const {data, error} = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: "Nuevo mensaje de contacto",
        html: `
          <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p> `
       });
       if(error) {
        console.error("Error al enviar el correo:", error);
        return new Response(JSON.stringify({ error: "Error al enviar el correo" }), { status: 500 });
       }

       return new Response(JSON.stringify({ 
        success: true, 
        message: "Correo enviado exitosamente" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Ha ocurrido un error con el servidor" }), { status: 500 });
    }
}