import { Injectable } from "@nestjs/common";
import { UserEntity } from "./Users.entity";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { CreateUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UserService {
     private readonly users: UserEntity[]=[]

    
 findeAllUsers () :UserEntity[]{
         return this.users;
    } 

 findOneUser (id : string) :UserEntity | undefined{
    return this.users.find((user) => user.id === id);
 }

 createUser (CreateUserDto : CreateUserDto): UserEntity {
        const newUser : UserEntity = {
          ...CreateUserDto,
          id : Math.random().toString(36).substring(7)
        }
        this.users.push(newUser)
        return newUser;
 } 

 updateUser (id : string , UpdateUserDto : UpdateUserDto) :UserEntity {
       const userIndex = this.users.findIndex((user) => user.id === id);
       const updatedUser: UserEntity = {
         ...this.users[userIndex],
         ...UpdateUserDto,
       };
     
       this.users[userIndex] = updatedUser;
     
       return updatedUser;

 }
 
 editUser (id : string , UpdateUserDto : UpdateUserDto) : UserEntity{
  const userIndex = this.users.findIndex((user) => user.id === id);
  const updatedUser: UserEntity = {
    ...this.users[userIndex],
    ...UpdateUserDto,
  };

  this.users[userIndex] = updatedUser;

  return updatedUser;
 }


 deleteUser (id :string) :void {
  const userIndex = this.users.findIndex((user) => user.id === id);
  this.users.splice(userIndex, 1);
 }

} 