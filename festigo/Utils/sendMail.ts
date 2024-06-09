import  nodemailer from 'nodemailer';

async function sendEmail(senderEmail:string, receiverEmail:string,title:string,text:string) {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use any email service
        auth: {
            user: senderEmail, // Your email address
            pass: process.env.GOOGLE_APP_PASSWORD, // Your email password
        },
    });

    // Define the email options
    let mailOptions = {
        from: senderEmail, 
        to: receiverEmail, 
        subject: title, 
        text: text, 
        html:"welcome to the party and give your rsvp"
    };

    try {
        // Send email with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendEmail;
