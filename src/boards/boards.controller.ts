import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService, PeopleService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  /**종속성 주입 */
  //constructor(생성자)에 BoardsService라는 타입을 가지는 boardsService 프로퍼티를 넣는다.
  constructor(private boardsService: BoardsService) {}
  //이 괄호 안에서 종속성 주입이 일어난다.
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }
}

@Controller('people')
export class PeopleController {
  //생성자안에서 제한자를 쓰면 프로퍼티가 된다나?
  constructor(private peopleService: PeopleService) {}
  @Get()
  getAllPeople() {
    return this.peopleService.getAllPeople();
  }
}
