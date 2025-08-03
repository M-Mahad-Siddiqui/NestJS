// // mail.service.ts
// import * as nodemailer from 'nodemailer';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MailService {
//   private transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       auth: {
//         user: 'lilla.terry55@ethereal.email',
//         pass: 'yQQSg25MR1QwugbNnN',
//       },
//     });
//   }

//   async sendPasswordResetEmail(to: string, token: string) {
//     const resetLink = `http://yourapp.com/reset-password?token=${token}`;
//     const mailOptions = {
//       from: 'Auth-backend service',
//       to: to,
//       subject: 'Password Reset Request',
//       html: `<p>You requested a password reset. Click the link below to reset your password:</p><p><a href="${resetLink}">Reset Password</a></p>`,
//     };

//     await this.transporter.sendMail(mailOptions);
//   }
// }

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com', // ✅ Brevo SMTP host
      port: 587,
      secure: false, // TLS is used, but not STARTTLS
      auth: {
        user: '824b51001@smtp-brevo.com', // ✅ Your SMTP user
        pass: '4XmcEptzKDWkbqy0', // ✅ Your SMTP password
      },
    });
  }

  async sendPasswordResetEmail(to: string, token: string) {
    const resetLink = `http://yourapp.com/reset-password?token=${token}`;
    const mailOptions = {
      from: '"Auth-backend service" <mahadsiddiqui21@gmail.com>', // ✅ Real sender email
      to: to,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset.</p>
        <p>Click the link below to reset your password:</p>
        <p><a href="${resetLink}">Reset Password</a></p>
        <p>This link will expire in 15 minutes.</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
