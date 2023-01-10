import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'tim-solution-postgresql.postgres.database.azure.com',
  port: 5432,
  username: 'postgres@tim-solution-postgresql',
  password: 'votmdnjem1!',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
