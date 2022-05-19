# 웹

    - 아토믹 디자인(Atomic Design)
        - Atoms(원자) : backdrop, 공통버튼
        - Molecules(분자) : 재사용 많이 되는 2~3개 기능
        - Organisms(유기체) : Molecules보다 조금 큰 단위
        - Templates : 컴포넌트들을 배치한 설계의 구조
        - Pages : 템플릿의 구체화된 인스턴스


    - axios, react-router-dom
    - recoil, redux:전역상태관리(로그인여부 등)
    - 디스플레이 그리드

## CORS 에러

    - 브라우저 JS에서 다른 도메인으로 http 요청하면 요청을 제한함
        - **해결** 요청서버에서 프론트 도메인을 허용
        - 서버를 직접 만들어서 프론트->커스텀서버->요청서버(naver서버)
        - webpack dev server의 proxy 서버 이용
            - package.json에 proxy를 두고(개발단계에서만 이용)
    - axios 이용해 요청
    - await 로 이용

- HTML 태그 적용

  - <Title dangerouslySetInnerHTML={{ __html: title }} />

- Nav바 활용: useLocation, Outlet
- axios 인스터스
