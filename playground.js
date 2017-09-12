
rest operator/multiple args
const a = function(...args){
	
	for(const arg of args) {
		console.log(arg)
	}
}
//............

const arr1 = ['a', 'b'];

const arr2 = ['c', 'd'];

array1.push(...array2)

//................


assign named defaults
function hey({a=b, k=0}  = {});

assign parameter defaults
function alex(x=9, y=8)


//....................

const des = [4,5,3,2]

for(const arg of des) {
	consol.log(arg)
}
//..........

addEventLstener('click', () => {
	this.handleClick();
})
//...................

const arr1 = ['a','b','s']

const arr2 = ['h','j','k']

const arr3 = ['l','c','m']

console.log(...arr1, ...arr2, ...arrr3)

// ['a','b','s','h','j','k','l','c','m']

//...............................

let x = 3;
function func(random){
	if(random){
		let x = Math.random();
		return x
	}
  return x;
}
func(false)//3

//............................
var a = 9,
	b = 11;
//declare block scope variables


{

 let a = 9;

 const b = 11;

}
console.log
//.................

//template strings

function add(x,y) {

	console.log('${x}, ${y}')
}

//...................

document.getElementById("result");

result.addEventLstener('click', () => {
	this.submitHandler();
})

..........

const nums = [1, 3, 5];

const squares = num.map(x => x * x)
console.log(squares);

