import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { user1666785491807 } from '../migrations/1666785491807-user';
import { user1667382182157 } from '../migrations/1667382182157-user';
import { user1667382210525 } from '../migrations/1667382210525-user';
import { User } from '../users/entity/user.entity';
config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  entities: [User],
  migrations: [user1666785491807, user1667382182157, user1667382210525],
});
