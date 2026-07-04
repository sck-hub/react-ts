"use strict";
let person1 = {
    name: "홍길동",
    age: 31,
    id: 1
};
let person2 = {
    name: "김모씨",
    id: 2
    // ?를 사용하면 나이를 제외할 수 있다
};
let person3 = {
    name: "권순찬",
    age: 39,
    id: 3
};
// person2의 이름 변경
// person2.id = 10;    // id가 변경 됨 -> 잘못 됨 
// readonly를 사용해서 id를 변경 못하게 에러 처리함 
person2.name = "이모씨";
person3.age = 40;
console.log(`사용자1 ID: ${person1.id}, 이름: ${person1.name}, 나이: ${person1.age}`);
console.log(`사용자2 ID: ${person2.id}, 이름: ${person2.name}`);
console.log(`사용자3 ID: ${person3.id}, 이름: ${person3.name}, 나이: ${person3.age}`);
