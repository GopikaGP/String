// w a p to print model and manufracturer name of the given car

// w a p add varient key to the car object with value has  'manuel'

// w ap to add a new value 'automatic' to the key varient

// w a p to add a new key as 'color' with value red,blue and white

var car = {
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10Lakh'
}
// w a p to print model and manufracturer name of the given car

console.log(car.manufacturer ,car.model);
console.log('------------------------');
// w a p add varient key to the car object with value has  'manuel'

car['varient']= ['manuel']
console.log(car);
console.log('------------------------');

// w ap to add a new value 'automatic' to the key varient
car.varient.push('automatic')
console.log(car);
console.log('------------------------');

// w a p to add a new key as 'color' with value red,blue and white
car['color']=['red','blue',"white"]
console.log(car);




