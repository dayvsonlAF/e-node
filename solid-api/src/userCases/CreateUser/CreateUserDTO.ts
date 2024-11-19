// DTO -> Data Transfer Object, transferimos um objeto de uma camada para outra;

// No controller, estou na infraestrutura (no mundo externo, onde o usuário se comunica, e faz ligação com algum protocolo etc)
// No UserCase, é uma camada interna de domínio.
// Com isso, preciso ter o formato dos dados que serão transmitidos entre as camadas

export interface ICreateUserRequestDTO{
  // Nisso temos os campos que precisamos para criar um usuário
  name: string;
  email: string;
  password: string;
}