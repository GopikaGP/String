// to find the number count in the given array and display as an object

array = [10,20,30,40,30,20,50,30,60,70,10,40,80]

obj = {}

for(i of array){
    if(i in obj){
        obj[i]+=1
    }
    else{
        obj[i] = 1
    }
}

console.log(obj);  