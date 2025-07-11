import nodemailer from 'nodemailer';

export async function sendEmail({email, comment}: { email: string; comment: string }) {
    try {
        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        const mailOptions = {
            from: email,
            to: 'husnainawan324@gmail.com',
            subject: 'Someone Saw Your Website',
            text: comment,
            html: `<p>${comment}</p>
                   <p>From: ${email}</p>`
        };
        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    
        
    } catch (error) {
        throw new Error(`Error sending email: ${error}`);
    }
}