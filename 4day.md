# 4일차

- 함수형(선언형) 프로그래밍

- 이벤트 관련 키워드: 이벤트 루프, 콜스택, 싱글 쓰레드
  [유투브 참고영상: 어쨌든 이벤트 루프는 무엇입니까](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

- 인스타 로그인 화면에 케로셀 실습 해보기

  -사용기술 useEffect, useCallback, useState, setTimeout, clearTimeout

- 쓰로틀링(연관 검색어, 케로셀 클릭, input onChange 딜레이)

## 자식에서 부모로 전달

    - 부모 -> 자식은 props 로 전달
    - 부모: parameter 받아서 name값을 변경하는 함수를 전달
    - 모달: input에 입력된 값을 useState 변수 text에 저장
    확인 버튼을 누르면 input에 입력된 값을 1번 함수에 넣고 실행
            & 모달닫기
    - 부모값을 바꿔줄수 있는 함수를 자식에 props로 전달
