//  w a p to print all vowels in the given sentance
str='good morning all'

vowels=['a','e','i','o','u','A','E','I','O','U']
// a=str.split('')
// console.log(a);

// for (let char of str){
//     if(vowels.includes(char))
//     console.log(char);
// }
// console.log('-------------------------') ;
// // anothet method

// a.filter(char=>
//     vowels.includes(char)).forEach((element) => {
//     console.log(element);
// })

console.log('-------------------------') ;

Array.from(str).filter(char=>
    vowels.includes(char)).forEach(element=>{
    console.log(element);
})



