
function removeChar(str){
    str2 = str.substring(1); // remove the first char
    str2 = str2.slice(0, -1); // remove the last char
   return str2;
   };

console.log(removeChar("eloquent")) // Return 'loquen'
console.log(removeChar("country")) // Return 'ountr'
console.log(removeChar("person")) // Return 'erso'
console.log(removeChar("place")) // Return 'lac'
console.log(removeChar("ooopsss")) // Return 'oopss'