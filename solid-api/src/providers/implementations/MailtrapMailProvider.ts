// Serviço usado enquanto a aplicação está em desenvolvimento para captar os emails que são enviados por ela para um servidor de testes

import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider{

  private transporter: Mail;

  constructor(
   
  ){
    this.transporter = nodemailer.createTransport({
      // Acessar o mailtrap, para colocar os valores
        host: '',
        port: 2525,
        auth:{
          user: '',
          pass: ''
        }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body
    })
  }
}