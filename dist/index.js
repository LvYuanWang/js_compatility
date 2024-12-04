const a = 1;
const b = {
  name: "John",
  age: 19
};
sendRequest = async () => {
  const {
    data
  } = fetch("https://www.baidu.com");
  console.log(data);
};

let c = 3;