//var => let + const

const array = [5 , 3 , 2, 10 , 2 , 20];
const double = []
const newarray = array.forEach((num) => {
	 double.push(num*2);
})

console.log(double);
console.log(double[1]);

//map , filtre, reduse

const mapArray = array.map((num) => {
	return num * 2;
});

console.log('map', mapArray);

//filtre

const filereArray = array.filter(num => {           //interesant!
	return num > 5
});

console.log('filter', filereArray); 

//reduse 

const reduceArray = array.reduce((accumulator, num) =>{
	return accumulator+num
}, 0);

console.log('reduce', reduceArray);

//advanced Objects

//reference type

var Object1 = { value: 10};  // value 10 => 15
var Object2 = Object1;		// value 10 => Object1(15)
var Object3 = { value: 10};

//context vs scope

function b() {
	let a = 4;
}

//instantiation

class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`hi i am ${this.name} , i'mam a ${this.type}`)
	}
}

class Wizard extends Player{
	constructor(name, type) {
		super(name ,type)
	}
	play(){
		console.log(`WEEE  i'am a ${this.type}`);
	}
}

const Wizard1 = new Wizard('Shally', 'Healer');
const Wizard2 = new Wizard('shawn', 'dark Magic');


//ES7  includes

const pets = ['cat', 'dog', 'rat'];

console.log(`Pets include dog:`, pets.includes('dog'));

//square

const square = (x) => x**2

const cube = (y) => x**3

//ES8

//padStart()
"car".padStart();
//padEnd()

Object.values
Object.entries
Object.keys

let obj ={
	user0: 'santa',
	user1: 'rudolf',
	user2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key,index) => {
	console.log(key, obj[key]);
})


//Async Await

//DEBUGING[console.log && debugger;]
/*
const flattened = [[0,1], [2,3],[4,5]].reduce(
					(accumulator,array) => {
					//debugger;
					 return accumulator.const(array)
					 }, []);
*/
//
/*
function foo(){
	foo()
}

console.log(foo());
*/

console.log('1');

setTimeout(() => { 					//timeout pentru functiile care se incarca greu

	console.log('2');

}, 2000)

console.log('3');

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP

