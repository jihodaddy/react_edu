//var let const

//1. 유효범위(scope)
    // var: 함수단위 scope
    // let, const : 블록단위
//2. 재할당 가능
    // var, let : 가능
    // const : 불가능

for (var i = 0; i < 5; i++) {
    console.log("var 안쪽"+ i)
}
console.log("var 바깥쪽" + i)

for (let j = 0; j < 5; j++) {
    console.log("let 안쪽"+ i)
}
console.log("let 바깥쪽" + j)

//hoisting - tdz 자바스크립트는 대부분  hoisting 됨
console.log(a);
var a = 5;
console.log(a);

console.log(b);
let b = 6;
console.log(a);

//const : 재할당 불가능 - 재할당 안할거면 대부분 const로 사용
//let : 재할당 가능

// 함수 선언식
add(3,4)
function add(a,b){
    return a+b
}
// 함수 표현식
minus(6,4)  //  not a function
const minus = function(a,b){
    return a-b
}
//  화살표 함수
const minus2 = (a,b) => {
    return a-b
}

const minus3 = (a,b) => a-b // a-b 리턴한다.

// 비구조화 할당

const person1 = {
    name1: "jason",
    age: 20,
    major: "computer"
}
// 코드를 줄여줌

//const name = person1.name;
// const {name} = person1;
// const{age} = person1;
// const{major} = person1;

const{name1, age, major} = person1;



// console.log("이름은" + person1.name+ "입니다.")
// console.log("나이는" + person1.age+ "세 입니다.")
// console.log("전공은" + person1.major+ "전공 입니다.")

console.log("이름은" + name1 + "입니다.")
//템플릿 리터럿
console.log(`
    이름은 ${name1}입니다. 
    나이는 ${age}입니다.
    전공은 ${major}전공 입니다.
    `)
console.log("나이는" + age + "세 입니다.")
console.log("전공은" + major + "전공 입니다.")

const arr1 = [1,2,3,4]
// const first = arr1[0];
// const second = arr1[1]

const[first, second] = arr

const arr2 = [0, ...arr1 , 5]   // ...arr1 객체 복사

const locationInfo = {
    country: "Korea",
    city: "Soeul"
}

const subMajor = "Math"
const person2 = {
    ...person1, //펄침 연산자 (복사)
    ...locationInfo, 
    age : 24,
    //subMajor: subMajor
    subMajor // 키값과 같으면 생략 가능
}  // person1뒤의 age:24가 덮어짐, 순서중요

//변수는 변경, arr객체는 주소로 저장됨
// let a=3;
// undefined
// let b =a;
// undefined
// b
// 3
// a=5;
// 5
// b
// 3
// const arr1 =[1,2,3]
// undefined
// const arr2= arr1;
// undefined
// arr2
// (3) [1, 2, 3]
// arr1[0]=5
// 5
// arr1
// (3) [5, 2, 3]
// arr2
// (3) [5, 2, 3]

// const obj1 = {arr1:[1,2,3], prim:"원시"}
// undefined
// const obj2 = {...obj1}
// undefined
// obj2.prim
// '원시'
// obj1
// {arr1: Array(3), prim: '원시'}
// obj2.arr1[0] = 5;
// 5