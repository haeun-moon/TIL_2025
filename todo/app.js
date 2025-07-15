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

  //기존 todo 목록을 읽어오기
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
app.put('/todos/:id', (req, res) => {
  const todos = loadTodos();
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Not found" });
  todo.title = req.body.title ?? todo.title;
  todo.done = req.body.done ?? todo.done;
  saveTodos(todos);
  res.json(todo);
});

// [6] 할일 삭제
app.delete('/todos/:id', (req, res) => {
  let todos = loadTodos();
  const lengthBefore = todos.length;
  todos = todos.filter(t => t.id !== Number(req.params.id));
  if (todos.length === lengthBefore) return res.status(404).json({ error: "Not found" });
  saveTodos(todos);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('TODO API 서버 http://localhost:3000');
});