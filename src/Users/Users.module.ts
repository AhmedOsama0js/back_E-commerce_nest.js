import { Module } from '@nestjs/common';
import { UserController } from './Users.controller';

@Module({
  controllers: [UserController],
})
export class UsersModule {}
