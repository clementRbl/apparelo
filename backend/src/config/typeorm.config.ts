import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  schema: process.env.POSTGRES_SCHEMA,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
