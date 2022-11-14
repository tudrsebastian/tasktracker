import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
 constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>
 ){}
 async getById(id: number) {
  const user = await this.usersRepository.findOne({ where: {
    id: id
  } });
  if (user) {
    return user;
  }
  throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
}
 async getByEmail(email: string){
  const user = await this.usersRepository.findOne({where: {
    email: email
  }});
  if(user){
    return user;
  }
  throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND)
 }

 async create(userDto: UserDto):Promise <UserDto>{
  const { email } = userDto;

  const existingUser = await this.usersRepository.findOne({where : { email }});
  if(existingUser){
    throw new HttpException('This email is already used', HttpStatus.CONFLICT);
  }
  return this.usersRepository.save(this.usersRepository.create(userDto));
 }
}
