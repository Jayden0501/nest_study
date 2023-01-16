import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './typeorm/typeorm-ex.module';
import { BoardRepository } from './boards/board.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository]),
    TypeOrmExModule.forCustomRepository([BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
  ],
})
export class AppModule {}
