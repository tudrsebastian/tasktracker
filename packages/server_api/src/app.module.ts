import { ProtectedModule } from './protected/protected.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/users.module';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import configuration from './config/configuration';
@Module({
  imports: [
    UserModule,
    HealthModule,
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        JWTSECRET:Joi.string().required(),
        JWTEXPTIME: Joi.string().required(),
      })
    }),
    DatabaseModule,
    AuthModule,
    ProtectedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
