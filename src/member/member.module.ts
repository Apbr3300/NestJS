import { Module } from '@nestjs/common';
import { MembersService } from './member.service';
import { MembersController } from './member.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
})
export class MemberModule {}
