// case sensitive
// return a boolean value

str='Luminar'
console.log(str.startsWith('Lum'))
console.log(str.startsWith('lum'))
console.log(str.endsWith('nar'))
console.log(str.endsWith('Nar'))

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str1='  Luminar'
console.log(str1.trim());

// subString

str='luminar'
newStr = str.substring(0, 4)
console.log(newStr);
str2=str.substring(2)
console.log(str2);
str3 = str.substring(0, 4)
console.log(str3);
