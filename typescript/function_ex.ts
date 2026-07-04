// 함수 정의
// return이 있는 함수
// function sub(x: number, y: number): number {
//     return x - y
// }

// 매개변수 각각 해주고 return 값 선언 / 숫자일 때는 number
const sub = (x: number, y: number): number => {
    return x - y;

}

const result = sub(10, 11);
console.log("결과:", result);

// return이 없는 함수 - void
// function greet(name: string): void {
//     console.log(`Hello, ${name}`);
    
// }

const greet = (name: string): void => {
    console.log(`Hello, ${name}`);
   
}

greet("TypeScript!");

// 객체를 반환하는 함수 : 타입은 객체
const createUser = (id: number, name: string): {
    id: number,
    name: string
    } => {
        return {id, name}
}

const user_kwon = createUser(1, "권순찬")
console.log(`사용자ID: ${user_kwon.id}, 이름: ${user_kwon.name}`);
