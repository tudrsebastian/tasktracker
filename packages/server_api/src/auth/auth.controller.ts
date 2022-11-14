import { RegisterInterceptor } from './../interceptors/register.interceptor';
import { Body, Controller, Post,HttpCode,UseGuards, Req, Get, UseInterceptors, Res } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';
import { AuthService} from './auth.service';
import {LocalAuthGuard} from './localAuth.guard';
// import  RequestUser  from './requestUser.interface';
import JwtAuthGuard from './jwt-auth.guard';
import { Response,Request } from 'express';
@Controller('auth')
// @UseInterceptors(RegisterInterceptor)
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('register')
     async register(@Body() userDto: UserDto){
       return this.authService.register(userDto)
    }
    @HttpCode(200)
    // @UseGuards(LocalAuthGuard)
    @Post('login')
    async logIn(@Req() request: Request, @Res() response: Response) {
      const {user} = request;
      const cookie = this.authService.getCookieWithJwtToken(user.id);
      response.setHeader('Set-Cookie', cookie);
  return this.authService.login(request.body.email , request.body.password);
    }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: Request) {
    const user = request.user;
    return user;
  }
}
