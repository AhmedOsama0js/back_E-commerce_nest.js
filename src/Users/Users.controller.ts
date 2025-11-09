import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './Users.entity';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService :UserService ) {

  }

  @Get()
  findAllRecord(): UserEntity[] {
    return this.userService.findeAllUsers()
  }

  @Get(':id')
  findOneRecord(@Param('id') id: string): UserEntity | undefined {
    return this.userService.findOneUser(id)
  }

  @Post()
  addRecord(@Body(ValidationPipe) createUserDto: CreateUserDto): CreateUserDto {
    return this.userService.createUser( createUserDto)

  }


@Put(':id')
updateRecord(
  @Param('id') id: string,
  @Body(ValidationPipe) updateUserDto: UpdateUserDto,
): UserEntity {

  return this.userService.updateUser(id ,updateUserDto)

}

@Patch(':id')
editRecord(
  @Param('id') id: string,
  @Body(ValidationPipe) updateUserDto: UpdateUserDto,
): UserEntity {
  return this.userService.editUser(id, updateUserDto)
}

@Delete(':id')
@HttpCode(204)
deleteRecord(@Param('id') id: string): void {
 return this.userService.deleteUser(id)
}
}
