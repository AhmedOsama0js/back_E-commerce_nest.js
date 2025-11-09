import { Module } from '@nestjs/common';
import { UserController } from './Users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UserController],
  providers: [UserService],  

})
export class UsersModule {}
