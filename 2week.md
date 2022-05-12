명령형: 동작을 지시
선언형 프로그래밍: 상태를 서술
함수형 프로그래밍

    - 응집도: 하나의 목적을 가진 코드를 뭉치자.
    - 단일책임: 함수가 한가지 기능을 하도록 하자.
    - 추상화: 함수의 세부구현 단계를 일치시키자.

### 데이타 추가

1. input에 입력된 값을 배열에 추가

   - 추가버튼을 누르면 input에 입력된 값 alert,
     - useState 변수 text 선언
     - input이 onChange될때 e.target.value를 setText함수에 넣기
     - button이 onClick될때 text값 alert하고
       setText함수에 넣기

2. 배열에 text추가 화면에 반영

   - names배열 useState선언
   - handleClick에서
     newNames선언: 기존 배열에 text가 추가된 샐운 배열 선언(펼침연산사 이용)
   - setNames에 neNames넣기

3. 배열에서 제거

   - 더블클릭하면 아이템의 id값을 alert
   - filter 함수 이용하여 제거 구현
