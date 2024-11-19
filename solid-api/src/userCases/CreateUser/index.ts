import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';
// Conecta a implementação do postgres e mailtrap com as interfaces (useCases)

const mailailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

// Passando para as classes as implementações que ela vai fazer
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailailtrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController }