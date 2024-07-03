interface Person {
  name : string;
  age : number;
}

interface Employee extends Person {
  employeeId : number;
  department : string;
}

const employee : Employee = {
  name : "Kiminteger",
  age : 29,
  employeeId : 20151240,
  department : "furniture installation"
};


const getEmployeeInfo = (emp: Employee) : string => {
  return `Name : ${emp.name}, Age : ${emp.age}, Employee Id : ${emp.employeeId}, Department : ${emp.department}`;
};

console.log(getEmployeeInfo(employee));