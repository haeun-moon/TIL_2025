// let message;

// let login = '임원';

// (login == '직원') ? message = "안녕하세요, 직원님" : 
// (login == '임원') ? message = "안녕하세요, 임원님" : 
// (login == '') ? message = "로그인이 필요합니다" : 
// message = '';

// alert(message);

let message = (login == '직원') ? '안녕하세요.' :
  (login == '임원') ? '환영합니다.' :
  (login == '') ? '로그인이 필요합니다.' :
  '';