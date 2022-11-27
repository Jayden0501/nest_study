import { Module } from '@nestjs/common';
import { BoardsController, PeopleController } from './boards.controller';
import { BoardsService, PeopleService } from './boards.service';
//service를 쓰려면
//모듈의 providers에 등록하고, 컨트롤러에도 등록하고 (차피 파일 안에서 export되는 특정 provider를 가져오면 되는거라 괄호안에 넣으면 됨.)
//컨트롤러에서 종속성주입하고,
//서비스에서 @injectable로 감싸야한다.
//서비스에서 작업의 리턴값을 컨트롤러로,
//컨트롤러에서 이를 res로 클라이언트에 전달

@Module({
  controllers: [BoardsController, PeopleController],
  providers: [BoardsService, PeopleService],
  //providers에 등록하고, service 자체에서도 injectable()로 감싸
  //종속성을 주입한다.
  //근데 컨트롤러에서 private로 감싸는 것도 종속성 주입에 필요한데
  //할게 많네
})
export class BoardsModule {}
