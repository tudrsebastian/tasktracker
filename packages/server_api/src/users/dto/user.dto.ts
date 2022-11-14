import { IsNotEmpty, IsEmail } from 'class-validator';
export class UserDto {
  @IsNotEmpty() 
  password: string;
  @IsNotEmpty() 
  full_name: string;
  @IsNotEmpty() 
  @IsEmail() email: string;
}
