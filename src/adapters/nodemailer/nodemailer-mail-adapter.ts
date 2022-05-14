import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1f2bcd96311083",
    pass: "9d3e8888cb04ab"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Cristiano Rasweiler Neto <cristianorneto@gmail.com>',
      subject,
      html: body,
    })
  }
}