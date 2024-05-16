str='hello'
console.log(str[4] );

//  w a p to check wheather the given string is palindrome or not
str1='MALAYALAM'

start=0
end=str1.length-1
isPalindrone=true
while(start<end){
    if(str1[start]!==str1[end]){
        isPalindrone=false
    }start++
    end--


}console.log(isPalindrone?'is a palindrome':'not a palindrome');

// another method for
pal=''
for(i=str1.length-1;i>=0;i--){
    pal+=str1[i]
}
console.log(str1==pal?'its apalindrome':'not apalindrome');