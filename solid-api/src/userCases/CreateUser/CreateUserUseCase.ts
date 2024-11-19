import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  // posso fazer da seguinte forma:

  // (01) private usersRepository: IUsersRepository;

  constructor(
    // Ou em vez, dessa forma que indiquei com o 01, posso simplesmente adicionar o private na frente (na forma 01, fica sem ele):
     private usersRepository: IUsersRepository,
     private mailProvider: IMailProvider,
  ){
    // (01) this.usersRepository = usersRepository;
  }

  // Para criar um usuário, precisamos receber os dados desses usuários, com isso usamos o DTO (Data Transfer Object)
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error('User already exists');
    }

    // Se ele não existir, criamos um usuário novo, passando os dados recebidos
    const user = new User(data);

    // Chamamos o nosso repositório, salvando o usuário no banco
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem vindo ao App',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    })
  }
}