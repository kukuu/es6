//using classes and prototype inheritance
class Bear {
	constructor(){
		this.type = "bear";
	}
	//add a method to the class
	says(say){
		console.log(this.type + " says " + say);
	}
}
//instantiate Bear object
 let bear = new Bear();
 
 //we call the instantiated object on the method
 bear.says("grizzly");
 
 //console will read "bear says grizzly"