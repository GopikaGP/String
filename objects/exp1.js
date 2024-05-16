arr=[1000,'roe','developer','kochi',32000,3]
employee={
    id:1000,
    name:'roe',
    des:'developer',
    age:25
}
console.log(arr[2] );
console.log(employee['des']);
console.log(employee.name);

//how to acces key in a objects

// in method is used to follow the key in the object
console.log('---------------------------' );
for(let key in employee){
    console.log(key );
}
console.log('---------------------------' );



if('emplocation' in employee){
    console.log('present');
}else{
    console.log('not present');
}
console.log(`emplocation key is ${'emplocation' in employee ? 'present':'not present'} `);

// how to add a key value pair in an object
// objectname['key']=value
console.log('--------------------------------------------');

// add experainec to the given object employee
employee['experience'] = 3
console.log(employee);

console.log('--------------------------------------------');
// add gender key in the given object if present print yes else add gender key given object with calue is male

if("gender" in employee){
    console.log('present' );
}else{
    employee['gender']="male"
    console.log(employee);

}
console.log('--------------------------------------------');
"gender" in employee?console.log( 'present'):( employee['gender']="male", console.log(employee))

// update a value in an object
employee.age+=1
console.log(employee);

console.log('--------------------------------------------');

// delete a key from an objects

// delete method
delete employee.age
console.log(employee);
