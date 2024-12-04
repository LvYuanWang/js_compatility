// const a = 1;
const b = {
  name: "John",
  age: 19,
  area: "China"
}

const { name, age } = b;
console.log(name, age);

class Person {
  constructor(name) {
    this.name = name;
  }
}

sendRequest = async () => {
  const { data } = fetch("https://www.baidu.com");
  console.log(data);
}

(async () => {
  await sendRequest();
})()

const c = 3;

function testMethod() {
  (() => {
    console.log(this);
  })()
}
testMethod();

const arr = Array.of(1, 2, 3);
console.log(arr);

new Promise(resolve => {
  resolve();
})