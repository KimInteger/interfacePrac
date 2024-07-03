interface StringFormatter {
  (input : string, upper : boolean) : string;
}

const formatString : StringFormatter = (input, upper) => {
  return upper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("Hellow Interface!" , true));
console.log(formatString("Hellow Interface!" , false));