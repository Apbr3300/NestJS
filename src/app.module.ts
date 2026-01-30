import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MemberModule } from './member/member.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BooksModule, MemberModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
