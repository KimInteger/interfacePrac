interface Animal {
  name : string;
  sound() : void;
}

class Dog implements Animal {
  name : string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name}는 왈!`);
  }
}

class Cat implements Animal {
  name : string;
  constructor(name : string){
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name}은 야옹`);
  }
}

const dog = new Dog('강아지');

const cat = new Cat('고양이');

dog.sound();
cat.sound();