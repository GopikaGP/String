text = 'hai hello all hello world all'

// to print the word count from the given string

// 1, convert the text into words
words = text.split(' ');
console.log(words);
console.log('_');

// 2, create an empty object

obj = {

}

// 3, fetch each words from the array 
for(i of words){
    // 4, check each word is present in the created object
    if(i in obj){
        obj[i]+=1
    }
    // 5, else add a new key:value to the obj
    else{
        obj[i] = 1
    }
}

console.log(obj);

// array method
wc = {}
text.split(' ').forEach(item=> item in wc?wc[item]+=1:wc[item]=1)
console.log(wc);