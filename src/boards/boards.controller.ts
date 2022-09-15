import { Controller, Get } from '@nestjs/common';
import { BoardsService, PeopleService } from './boards.service';

@Controller('boards')
export class BoardsController {
  /**종속성 주입 */
  //constructor(생성자)에 BoardsService라는 타입을 가지는 boardsService 프로퍼티를 넣는다.
  constructor(private boardsService: BoardsService) {}
  //이 괄호 안에서 종속성 주입이 일어난다.
  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
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
