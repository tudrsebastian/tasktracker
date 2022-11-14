import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
    imports:[
        UserModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
        imports:[ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) =>({
            secret: configService.get('JWTSECRET'),
            signOptions: {
                expiresIn: `${configService.get('JWTEXPTIME')}s`
            }
        })
        })
    ],
    controllers: [AuthController],
    providers:[AuthService,JwtStrategy,LocalStrategy],
    exports: [
        PassportModule,
        JwtModule
    ]
})
export class AuthModule {}
