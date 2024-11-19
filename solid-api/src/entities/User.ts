import { uuid } from "uuidv4";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  // Cria uma nova entidade. Ex: new User(), passando todas essa propriedades
  // Dessa forma estou omitindo o id, e deixando ele opcional. Pois ao criar um novo usuário, não passo um id, mas para trazer 
  // um usuário do banco, trarei o id.
  constructor(props: Omit<User, 'id'>, id?: string){
    // Posso fazer de duas formas:
    
    // this.name = props.name;

    // Ou assim, que faz automatico, com todas as propriedades do props, passando tudo para o this:
    Object.assign(this, props);

    // Se eu não passar um id para o usuário, faço com o uuid
    // Dessa forma, não deixamos a criação do id pora o banco de dados
    if (!id){
      this.id = uuid();
    }
  }
}