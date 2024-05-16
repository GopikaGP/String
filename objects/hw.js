student = {
    id:7,
    name:'juel',
    department:'Computer Science',
    age:19,
   
}
// call object as  
console.log(student)
//access key in object
for(let key in student){
    console.log(key);
}
console.log('----------------------------------------------------');

//  check whether marks in objects

if( 'marks' in student){
    console.log('yes')
    
}else{
    console.log('No');
}
console.log('----------------------------------------------------');

// check if gender is in present in the student object if not add gender as male

if('gender' in student){
    console.log('present')
}else{
    student.gender='male'
}
console.log(student);
console.log('----------------------------------------------------');
 
// add height in object  create

student['height'] = 151
console.log(student);
console.log('----------------------------------------------------');

// update the height and name in object
student.height+=3
student.name='juel james'
console.log(student);
console.log('----------------------------------------------------');

// delete the pbject
delete student.gender
console.log(student);

