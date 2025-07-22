let officialJS = prompt ("자바스크립트의 '공식' 이름은 무엇일까요?");

let message = (officialJS === "ECMAScript") ? "정답입니다! 공부하세요!" : "오답입니다! 공부하세요!";

alert(message);

if (officialJS === "ECMAScript") {
    alert("정답입니다! 정진하세요!");
} else {
    alert("오답입니다! 후진하세요!");
}