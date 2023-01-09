import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';
// 커스텀 훅...status를 업데이트하는 controller의 파라미터 레벨에서 사용되었다...
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  //readonly로 가져와서, 읽기는 하되, 수정은 불가
  transform(value: any) {
    value = value.toUpperCase();
    //client로부터 받은 값을 대문자로 변환
    if (!this.isStatusValid(value)) {
      throw new BadRequestException('모해?');
    }
    return value;
  }
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    //대문자로 변환된 값을,readonly로 불러온 status enum과 비교해서, 일치하는 값이 있으면
    //그 값을 그대로 리턴하고, 없으면 에러를 던진다.
    console.log(index);
    return index !== -1;
    //indexof는 배열 내에 파라미터와 일치하는 값이 있는지 검사한다.
    //없으면 -1, 있으면 0 이상(해당 배열 내에서 그 값의 위치)을 반환한다.
  }
}
