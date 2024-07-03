interface User {
  id : number;
  name : string;
  email : string;
}

const getUserInfo = (user:User) : string => {
  return `ID : ${user.id}, Name : ${user.name}, Email : ${user.email}`;
}

const user : User = {id:1, name: "KimInteger", email : "talton@naver.com"};

console.log(getUserInfo(user));