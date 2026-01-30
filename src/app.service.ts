import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'God Bless You';
  }
  getWelcome(): string {
    return 'Selamat Datang';
  }
  getTambah(): number {
    return 44;
  }
}
