// javascript의 단점
console.log(2+3);   // 5
console.log(2+'3'); // 23

let n1 = 10;
let n2 = '10';
console.log(n1==n2);    // true (틀림)
console.log(n1===n2);   // =을 3개 해야함
// -> 불편하다

// var 변수의 호이스팅 : 변수 선언을 스코프의 최상단으로 끌어올리는 동작
console.log(a);     // undefined (에러가 안남, 잘못됨)
var a = 100;    // a가 있다고 생각함

// console.log(b);     // 에러남 -> 정상
let b = 200;

// 함수 정의시 호이스팅 문제
console.log(add(4,5));      // 호출
function add(x,y) {     // 정의
    return x + y;
}
// -> 호출을 먼저하고 정의를 나중에 했는데 값이 나옴 : 잘못됨
// console.log(add(4,5));      // 9