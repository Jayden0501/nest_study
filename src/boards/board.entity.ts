import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';
@Entity()
export class Board extends BaseEntity {
  @Column()
  title: string;
  @Column()
  description: string;
  status: BoardStatus;
}
