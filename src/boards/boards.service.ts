import { Injectable } from '@nestjs/common';

@Injectable()
//Injectable을 추가함으로써, nestjs 어디에서든 쓸 수있다.
//보내는 쪽에서 쓸 수 있게 설정을 했으니, 받는 쪽에서도 쓸 수 있게 설정해야.
export class BoardsService {
  /**private가 없으면 다른 컴포넌트에서 boards배열값을 변하게 할 수도 있다. */
  private boards = [1, 2, 3, 4];

  getAllBoards() {
    return this.boards;
  }
}

@Injectable()
export class PeopleService {
  private People = ['john', 'jayden', 'linda'];

  getAllPeople() {
    return this.People;
  }
}
