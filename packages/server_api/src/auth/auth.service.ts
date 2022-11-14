
import { ConfigService } from '@nestjs/config';

import { Injectable, HttpException, HttpStatus, } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
export interface RegistrationStatus {  
    success: boolean;  
    message: string;
}


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}
    public async register(registraionData: CreateUserDto){
        
        const hashPassword = await bcrypt.hash(registraionData.password, 10);
             const createdUser = await this.usersService.create({
                ...registraionData,
                password: hashPassword
            }) 
            return createdUser;
     
    }

    public async getAuthedUser(email: string, hashPassword: string){
        try{
            const user = await this.usersService.getByEmail(email);
            const isPassMatching = await bcrypt.compare(
                hashPassword,
                user.password
            )
            if(!isPassMatching){
                throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
            }
            user.password = undefined;
            return user;
        } catch(error){
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST)
        }
    }

    async login(username: string, password: string){
        const user =await this.getAuthedUser(username, password);
        const payload = {
            userId: user.id
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    public getCookieWithJwtToken(userId: number){
        const payload: TokenPayload = {userId};
        const token = this.jwtService.sign(payload);
        return `Auth=${token}; HttpOnly;Max-Age=${this.configService.get('JWTEXPTIME')}`;
    }
    
}
