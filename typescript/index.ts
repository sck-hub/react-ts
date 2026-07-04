// tsc index.ts -> typescript compile
// string - 문자열
let message: string = "hello TypeScript";
console.log(message);

// number - 숫자형
let age: number = 30;
console.log(`나이: ${age}`);

// boolean - true/false
let isStudent: boolean = false;
console.log(`당신은 학생입니까? ${isStudent}`);

// 배열
let carts: string[] = ["사과", "바나나", "오렌지"];
console.log(`장바구니: ${carts[1]}`);
console.log(`장바구니: ${carts.join(", ")}`);

// Array
let carts2: Array<string> = ["딸기", "포도", "키위"];
console.log(`장바구니2: ${carts2.join(", ")}`);

// -> 타입스크립트는 타입을 먼저 정해야함
// interface , type