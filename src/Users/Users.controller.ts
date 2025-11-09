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

@Controller('users')
export class UserController {
  @Get()
  findAllRecord(): number[] {
    return [1, 2, 3, 4];
  }

  @Get(':id')
  findOneRecord(@Param('id',ParseIntPipe) id: string): string {
    console.log(typeof id)
    return id;
  }

  @Post()
  addRecord(@Body(ValidationPipe) userData: CreateUserDto): CreateUserDto {
    return userData;
  }

  @Put(':id')
  UpdateRecord(
    @Param('id') id: string,
    @Body(ValidationPipe) userData: UpdateUserDto,
  ): UpdateUserDto {
    return { id, ...userData };
  }

  @Patch(':id')
  EditRecord(
    @Param('id') id: string,
    @Body(ValidationPipe) userData: UpdateUserDto,
  ): UpdateUserDto {
    return { id, ...userData };
  }

  @Delete(':id')
  @HttpCode(204)
  DeleteRecord(@Param('id') id: string): void {
    console.log(id);
    return;
  }
}
