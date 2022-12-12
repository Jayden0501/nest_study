import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
//Injectable을 추가함으로써, nestjs 어디에서든 쓸 수있다.
//보내는 쪽에서 쓸 수 있게 설정을 했으니, 받는 쪽에서도 쓸 수 있게 설정해야.
export class BoardsService {
  /**private가 없으면 다른 컴포넌트에서 boards배열값을 변하게 할 수도 있다. */
  private boards: Board[] = [
    {
      id: 'admin',
      title: 'admin',
      description: 'adminUser',
      status: BoardStatus.PRIVATE,
    },
    {
      id: 'LA',
      title: 'admin',
      description: 'adminUser',
      status: BoardStatus.PRIVATE,
    },
    {
      id: 'JD',
      title: 'admin',
      description: 'adminUser',
      status: BoardStatus.PRIVATE,
    },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
    console.log(board);
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => {
      return board.id === id;
    });
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}

@Injectable()
export class PeopleService {
  private People = ['john', 'jayden', 'linda'];

  getAllPeople() {
    return this.People;
  }
}
