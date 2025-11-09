import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
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
  findOneRecord(@Param('id') id: string): string {
    return id;
  }

  @Post()
  addRecord(@Body() userData: CreateUserDto): CreateUserDto {
    return userData;
  }

  @Put(':id')
  UpdateRecord(
    @Param('id') id: string,
    @Body() userData: UpdateUserDto,
  ): UpdateUserDto {
    return { id, ...userData };
  }

  @Patch(':id')
  EditRecord(
    @Param('id') id: string,
    @Body() userData: UpdateUserDto,
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
