# 3일차

- 컴포넌트 분리
- 체크여부 data저장
  - item에 idDone: true
  - <Item/>의 checkbox checked값을 data의 idDone과 연결
- data에 따라서 스타일링

- 부정조건->긍정
- if문 => 삼항연산자 바꾸기

- 상태관리앱

  - redux
  - mobx
  - recoil
  - useContext

- <Bootstrap/>에서
  - datas/bootstrap 의 accordionData를 import
  - accordionData를 <Accordion/>에 data라는 이름의 props로 전달
- <Header/>를 누르면 activeIndex가 그 아이템의 index로 바뀜
- <Body/>의 isActive는 activeIndex와 index에 따라서 결정

- 이미 열려있는것 클릭하면 모두 닫기
  - 이미 열려있는지 확인
  - 모두 닫기
