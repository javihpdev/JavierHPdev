import { json, type RequestHandler } from "@sveltejs/kit";
import { EMAIL_FROM, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT } from "$env/static/private";
import { createTransport } from "nodemailer";



export const POST: RequestHandler = async ({ request }) => {
   try{

       const { nombre, telefono, email, asunto, mensaje } = await request.json();

       if (!nombre || !email || !mensaje || !asunto) {
        return new Response(JSON.stringify({ error: "Faltan campos obligatorios" }), { status: 400 });
       }

       const transporter = await createTransport({
        host: EMAIL_HOST,
        port: parseInt(EMAIL_PORT),
        secure: false,
        auth: {
            user: ,
            pass: EMAIL_PASS
        }
       });

       const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_FROM,
        replyTo: email,
        subject: `Nuevo mensaje del Porfolio: ${asunto}`,
        html: `
            <h2>Nuevo mensaje del Porfolio</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `
       };
       
       await transporter.sendMail(mailOptions);

const confirmOptions = {
    from: `"Javier Hernández Pérez" <${EMAIL_FROM}>`,
    to: email,
    subject: '¡Confirmación de recepción del Mensaje!',
    html: `
    <div style="text-align: center; gap: 10px; max-width:480px;margin:32px auto;padding:24px 16px;background:#1e3a8a;border-radius:14px;font-family:Segoe UI,Arial,sans-serif;color:#e5e7eb;">
        <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:12px;color:#38bdf8;">
            ¡Mensaje recibido!
        </h2>
        <p style="font-size:1rem;color:#cbd5e1;text-align:center;margin-bottom:16px;line-height:1.6;">
            Hola <strong style="color:#fff;">${nombre}</strong>,<br>
            Gracias por ponerte en contacto conmigo.<br>
            He recibido tu mensaje y te responderé con la mayor brevedad posible.<br>
            Puedes seguir explorando mi web o responder a este correo si tienes alguna duda adicional.
        </p>
        <p style="margin:16px 0;">
            <a href="https://github.com/javihpdev" target="_blank" style="background:#22223b;padding:8px 14px;border-radius:8px;color:#fff;text-decoration:none;font-weight:600;font-size:1rem;margin-right:8px;">GitHub</a>
            <a href="https://www.linkedin.com/in/javihdezperez" target="_blank" style="background:#2563eb;padding:8px 14px;border-radius:8px;color:#fff;text-decoration:none;font-weight:600;font-size:1rem;">LinkedIn</a>
        </p>
        <p style="font-size:0.97rem;color:#94a3b8;margin-top:16px;">
            Saludos cordiales,<br>
            <strong style="color:#fff;">Javier Hernández Pérez</strong><br>
            <span style="font-size:0.9rem;">Desarrollador Full Stack</span>
        </p>
    </div>
    `
};

       await transporter.sendMail(confirmOptions);

       return json({ success: true, message: "Correo enviado exitosamente" });

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return json ({success: false, message: "Ha ocurrido un error al enviar el correo" }, {status: 500});
     }
     
}