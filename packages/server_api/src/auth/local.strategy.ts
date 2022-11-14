import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";
import { User } from '../users/entity/user.entity';

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor( private authService : AuthService){
        super({
            emailField : 'email'
        });
    }

    async validate(email: string, password: string): Promise<User>{
        return this.authService.getAuthedUser(email, password);
    }
}