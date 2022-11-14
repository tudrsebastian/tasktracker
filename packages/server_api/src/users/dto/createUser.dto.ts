import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() 
  full_name: string;
  @IsNotEmpty() 
  password: string;
  @IsNotEmpty() 
  @IsEmail() email: string;
}
