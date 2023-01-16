import { BoardRepository } from './board.repository';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';
//Injectable을 추가함으로써, nestjs 어디에서든 쓸 수있다.
//보내는 쪽에서 쓸 수 있게 설정을 했으니, 받는 쪽에서도 쓸 수 있게 설정해야.
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.checkExistBoard(id);

    return found;
  }
  //   /**private가 없으면 다른 컴포넌트에서 boards배열값을 변하게 할 수도 있다. */
  //   private boards: Board[] = [
  //     {
  //       id: 'admin',
  //       title: 'admin',
  //       description: 'adminUser',
  //       status: BoardStatus.PRIVATE,
  //     },
  //     {
  //       id: 'LA',
  //       title: 'admin',
  //       description: 'adminUser',
  //       status: BoardStatus.PRIVATE,
  //     },
  //     {
  //       id: 'JD',
  //       title: 'admin',
  //       description: 'adminUser',
  //       status: BoardStatus.PRIVATE,
  //     },
  //   ];
  //   getAllBoards(): Board[] {
  //     return this.boards;
  //   }
  //   createBoard(createBoardDto: CreateBoardDto) {
  //     const { title, description } = createBoardDto;
  //     const board: Board = {
  //       id: uuid(),
  //       title,
  //       description,
  //       status: BoardStatus.PUBLIC,
  //     };
  //     this.boards.push(board);
  //     return board;
  //   }
  //   getBoardById(id: string): Board {
  //     const found = this.boards.find((board) => {
  //       return board.id === id;
  //     });
  //     if (!found) {
  //       throw new NotFoundException(`Can't find Board with id -> ${id}`);
  //     }
  //     return found;
  //   }
  //   deleteBoard(id: string): void {
  //     const found = this.getBoardById(id);
  //     this.boards = this.boards.filter((board) => board.id !== found.id);
  //   }
  //   updateBoardStatus(id: string, status: BoardStatus): Board {
  //     const board = this.getBoardById(id);
  //     board.status = status;
  //     return board;
  //   }
  // }
  // @Injectable()
  // export class PeopleService {
  //   private People = ['john', 'jayden', 'linda'];
  //   getAllPeople() {
  //     return this.People;
  //   }
}
