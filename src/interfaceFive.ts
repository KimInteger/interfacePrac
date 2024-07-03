interface Product {
  id : number;
  name : string;
  price : number;
  description? : string; // 선택적 속성
}

const product : Product = {
  id : 1,
  name : "보름달",
  price : 500000
}

const printProductDetails = (product : Product) : void => {
  console.log(`ID : ${product.id}`);
  console.log(`Name : ${product.name}`);
  console.log(`Price : ${product.price}`);
  if(product.description) {
    console.log(`Description : ${product.description}`);
  } else {
    console.log(`Description : 설명이 읎오!`);
  }
}

const sell : Product = {
  id : 2,
  name : "초승달",
  price : 600000,
  description : "보름달 보다 비싼이유는 왜일까?"
}

printProductDetails(product);
printProductDetails(sell);
