interface IAddress{
  email: string;
  name: string;
}

export interface IMessage{
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider{
  // Método assincrono, por isso retorna uma promisse, e void pois não tem retorno algum dentro da promisse
  sendMail(message: IMessage): Promise<void>;
}