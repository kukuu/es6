//using class and prototype inheritance
class Bear {
	constructor(){
		this.type="bear";
	}
	//add a method to the class
	says(say){
		console.log(this.type + " says " + say);
	}
}

class Grizzly extends Bear {
  constructor(){
	super();//this guarantees inheritance from the parent and then ability to overide in next line
		this.type="Luca";
	}
}

let grizz = new Grizzly();
//now we call the object on the method it is inheriting from the parent class

grizz.says("growl");

//this will echo now as "grizzly says growl"