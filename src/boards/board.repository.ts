import { CustomRepository } from 'src/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
