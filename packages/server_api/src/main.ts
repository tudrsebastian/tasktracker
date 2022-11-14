import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

dotenv.config();
const configService = new ConfigService();
const serverPort = configService.get('ServerPORT');
const originRoute = configService.get('originRoute');
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [originRoute],
      credentials: true,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  // app.use(cookieParser())
  await app.listen(serverPort);
  app.use(helmet());
  app.use(helmet.frameguard({ action: 'deny' }));
}
bootstrap();