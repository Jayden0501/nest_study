import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  /**종속성 주입 */
  //constructor(생성자)에 BoardsService라는 타입을 가지는 boardsService 프로퍼티를 넣는다.
  constructor(private BoardsService: BoardsService) {}

  //이 괄호 안에서 종속성 주입이 일어난다.
  //   @Get('/')
  //   getAllBoard(): Board[] {
  //     return this.boardsService.getAllBoards();
  //   }
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.BoardsService.getBoardById(id);
  }

  //   @Post()
  //   @UsePipes(ValidationPipe)
  //   createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //     return this.boardsService.createBoard(createBoardDto);
  //   }

  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.boardsService.deleteBoard(id);
  //   }

  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  //   ) {
  //     return this.boardsService.updateBoardStatus(id, status);
  //   }
  // }

  // @Controller('people')
  // export class PeopleController {
  //   //생성자안에서 제한자를 쓰면 프로퍼티가 된다나?
  //   constructor(private peopleService: PeopleService) {}
  //   @Get()
  //   getAllPeople() {
  //     return this.peopleService.getAllPeople();
  //   }
}
