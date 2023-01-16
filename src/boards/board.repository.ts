import { NotFoundException } from '@nestjs/common';
import { CustomRepository } from 'src/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async checkExistBoard(boardId: number): Promise<Board> {
    return;
    // if (!found) {
    //   throw new NotFoundException(); // 404
    // }
    // return found;
  }
}
