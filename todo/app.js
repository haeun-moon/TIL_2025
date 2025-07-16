//express 웹 프레임워크 import
import express from 'express';

//파일 입출력 처리 모듈 import
import fs from 'fs';

//CORS 모듈 import
// Cross Origin Resource Sharing 사용
// 기본 - SOP Same Origin Policy
import cors from 'cors';

//express app 선언하기
const app = express();

//CORS 모듈에서 반환된 미들웨어 함수를 Express 전역(Global)으로 장착해 CORS 허용
// 기본값 `Access-Control-Allow-Origin: *` 모든 출처 허용!
app.use(cors());

//JSON 본문이면 parsing 해서 req.body 에 담고, 그 외 형식은 통과시킨다
app.use(express.json());

//FILE_PATH 상수에 'todos.json' 저장
const FILE_PATH = 'todos.json';



// [1] 파일에서 todos 불러오기 함수
function loadTodos() {

  //FILE_PATH 라는 파일이 존재하지 않는다면 빈 배열 반환
  // 파일이 없을 때는 이 return 으로 끝남
  if (!fs.existsSync(FILE_PATH)) return [];

  //FILE_PATH 파일을 utf-8 로 읽어서 data 상수에 저장
  const data = fs.readFileSync(FILE_PATH, 'utf8');

  // (data가 비어 있으면 '[]' 사용) JSON 문자열을 객체로 변환해 반환
  return JSON.parse(data || '[]');
}



// [2] 파일에 todos 저장 함수
function saveTodos(todos) {

  // todos 의 모든 데이터를 uft-8 로 읽어서 들여쓰기 2칸 JSON 문자열로 직렬화 해서 파일에 저장
  // 왜 return 값이 없는지?
  // 왜 const 상수에 저장하지 않는지?
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf8');
}



// [3] 할일 전체 조회

//HTTP GET 메서드 사용 -> CRUD 의 READ 조회
//GET /todos 요청이 오면 res.json(todos) 가 실행돼서 클라이언트로 목록이 응답된다
// /todos 자체가 JSON 목록을 돌려주는 엔드포인트
app.get('/todos', (req, res) => {

  //loadTodos 를 todos 에 저장
  const todos = loadTodos();

  //todos 를 json 으로 전달
  //Express 응답 메서드
  //JSON.stringify 로 문자열화 한 후
  //Content-Type: application/json; charset=uft-8 헤더 자동 설정
  //직렬화 + 전송까지 처리
  res.json(todos);
});




// [4] 할일 추가

//HTTP POST 메서드 사용 -> CRUD 의 CREATE 생성
app.post('/todos', (req, res) => {

  //기존 todos 목록을 읽어오기
  const todos = loadTodos();

  //요청 본문 req.body 의 title 필드만 꺼내어 title 에 저장
  //{ title } 인 이유 - req.body 는 객체, 구조 분해 할당 사용
  const { title } = req.body;

  //title 값이 없거나 빈 문자열이라면 400 Bad Request 와 { error: 'title is required' } JSON 응답
  if (!title) return res.status(400).json({ error: 'title is required' });

  //id 값은 현재 시각, done 값은 false 를 기본값으로 title 과 함께 newTodo 로 저장
  // done 의 경우 기본값 false 로 새 객체를 생성해 newTodo 변수에 저장
  const newTodo = { id: Date.now(), title, done: false };

  //기존 todos 배열에 newTodo 를 push
  todos.push(newTodo);

  //수정된 todos 배열을 파일에 저장
  saveTodos(todos);

  //201 Created 상태 코드와 함께 newTodo 객체를 JSON 으로 응답
  res.status(201).json(newTodo);
});




// [5] 할일 수정

//HTTP PUT 메서드 사용 -> CRUD 의 UPDATE 생성
app.put('/todos/:id', (req, res) => {

  //기존 todos 목록을 읽어오기
  const todos = loadTodos();

  //경로 파라미터의 id 값 (문자열) 을 Number 로 실수화
  //t 는 배열을 돌며 만나는 각 todo 객체
  //t.id 값과 일치하는지 확인 (엄격한 비교)
  //todos 배열에서 첫번째로 콜백이 true 를 돌려준 요소를 반환
  //todo 에 저장

  //만약 todos.find 조건을 만족하는 요소가 없다면 undefined

  //find 가 반환하는 것은 새로 복사된 데이터가 아니라, 배열 안에 들어 있던 그 객체의 참조
  // 즉, todo 와 todos[index] 는 메모리 상 동일한 객체를 바라본다
  const todo = todos.find(t => t.id === Number(req.params.id));

  //undefined 라면 Boolean 문맥 속에서 자동으로 false 로 변환 -> 내장 규칙 ToBoolean 참고
  //todo 값이 false 라면 ! 으로 인해 true 로 변환
  //404 Not Found 응답을 보냄
  if (!todo) return res.status(404).json({ error: "Not found" });

  //req.body.title 을 확인 후 있다면 값 변환, 없다면 기존 값 todo.title 유지
  // ?? - 좌항이 null 또는 undefined 라면 우항을 사용 -> || 와 비교 참조
  //현재로써는 title 값을 수정할 수 없기 때문에 주석 처리해도 정상 작동
  todo.title = req.body.title ?? todo.title;

  //req.body.done 을 확인 후 있다면 값 변환, 없다면 기존 값 todo.done 유지
  todo.done = req.body.done ?? todo.done;

  //todo 와 todos[index]가 메모리 상 동일한 객체를 바라보기 때문에
  //todo 를 따로 저장하지 않아도 todos 안에 반영되어 있음
  //수정된 todos 배열을 파일에 저장
  saveTodos(todos);

  //todos 를 json 으로 전달
  res.json(todo);
});



// [6] 할일 삭제

//HTTP Delete 메서드 사용 -> CRUD 의 DELETE 생성
app.delete('/todos/:id', (req, res) => {

  //기존 todos 목록 읽어오기
  //filter 결과로 새 배열을 재할당해야 하기 때문에 const 말고 let 사용
  let todos = loadTodos();

  //삭제 전 todos 의 배열 길이를 저장
  //후에 정상적으로 삭제되었는지 확인하기 위함
  const lengthBefore = todos.length;

  //filter 를 통해 삭제 id 를 제외한 todo 만 저장
  //filter : 불변 상태 관리 - 원본은 손대지 않고, 수정된 사본을 만들어 반환
  todos = todos.filter(t => t.id !== Number(req.params.id));

  //삭제 후 길이가 이전 길이와 동일하다면 삭제 실패
  //404 Not Found 로 응답을 보냄
  if (todos.length === lengthBefore) return res.status(404).json({ error: "Not found" });

  //수정된 todos 배열을 파일에 저장
  saveTodos(todos);

  //성공 결과 응답
  // res.status(200).json({ success: true }) 와 동일
  //응답 본문을 JSON 으로 보내고, 아직 상태 코드를 지정하지 않았다면 200 OK 로 기본 설정한다
  res.json({ success: true });
});



//Express 앱을 포트 3000 에서 실행
//서버가 실제로 리스닝을 시작한 순간에만 콜백을 호출
//app 은 (req, res) 서명 함수를 가지고 있어 요청 처리 가능
app.listen(3000, () => {

  //리스닝이 성공적으로 완료되면 한 번 호출되는 콜백 함수
  console.log('TODO API 서버 http://localhost:3000');
});