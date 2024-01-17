import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const text = `
    <div>
      <h1>Server Opened Successfully!</h1>
      <p>use /animes para ver a lista de animes</p>
      <p>use /users para ver os usuários</p>


      <p>Create by <strong>Eliabe Gai</strong></p>
    </div>
    `
    return text;
  }
}
