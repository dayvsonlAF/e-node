import { User } from "../entities/User";

/*

O uso de uma Promise no TypeScript indica que o método realizará uma operação assíncrona, ou seja,
o método não retornará imediatamente o valor esperado. Em vez disso, ele retorna uma promessa que 
será resolvida no futuro, uma vez que a operação esteja concluída. Isso é especialmente útil quando 
lidamos com operações como acesso a banco de dados, requisições de rede ou outras tarefas que levam 
tempo para serem concluídas.

*/

export interface IUsersRepository {
  // Método para dectar se já existe aquele email no banco
  findByEmail(email: string): Promise<User>; //Retorna um User
  save(user: User): Promise<void>; //Não retorna nada, apenas salva no banco
}