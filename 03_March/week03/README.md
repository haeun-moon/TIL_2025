# March 09~15

## Day 10

### Servlet 학습

#### Servlet 이란?
- Server + Applet 의 합성어로, 웹 어플리케이션 서버 (WAS) 내에서 실행되는 자바 프로그램
- 자바 코드 속 HTML 코드가 들어있는 형태
- 동적 웹 페이지 생성 가능
- Java EE (Enterprise Edition) 에서 실행 가능

#### Servlet Container 란?
- Servlet Instance 의 생성, 실행, 소멸을 관리하는 프로그램
- 흐름을 제어하여 IoC (Inversion of Control) 발생
- 생성 Initialization (Load Resources) : 
    - Servlet 클래스 로드
        - Servlet Request / Servlet Response 객체 생성
    - 설정 파일을 참고하여 mapping 할 Servlet 확인
    - Servlet Instance 존재 유무 확인
    - 없을 시 `init()`  메서드 1회 호출
        - Servlet Instance 초기화
- 실행 Service (Accept Requests) :
    - `service()` 메서드 호출
        - 요청이 들어올 때마다 호출 가능
    - 미리 생성된 HttpServletRequest / HttpServletResponse 에 의해 request / response 객체 제공
    - `doGet()` , `doPost()` 등
- 종료 Destruction (Unload Resources) : 
    - `destroy()` 메서드 1회 호출
    - Servelt Request / Servlet Response 객체 소멸
    - Servlet 소멸 시 GC (Garbage Collection) 진행
