//prgm to find first recursive letter
arr = 'ABCBBCAACB'
obj1={}
character=Array.from(arr)
for(char of character){
    if(char in obj1){
        console.log(char);
        break
    }
    else{
        obj1[char]=1
    }
}