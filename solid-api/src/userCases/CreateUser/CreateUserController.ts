import { CreateUserUseCase } from './CreateUserUseCase';
// Recebe a request e envia uma response
// Não criamos uma pasta chamada controllers, pois estamos usando o package by feature que é um padrão
// onde estruturamos as pastas da aplicação por feature, funcionalidade.

import { Request, Response } from "express";

export class CreateUserController{

  constructor(
    private createUserUseCase: CreateUserUseCase,
  ){

  }
  // poderia ser execute também
  async handle(request: Request, response: Response): Promise<Response>{
    // Pegando as propriedades do body
    const { name, email, password } = request.body;

    try{
      await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }


  }
}