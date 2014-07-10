//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = age;
}


//Now create three instances of Person with data you make up

var evan = new Person('Evan', 33);
var megan = new Person('Megan', 31);
var hannah = new Person('Hannah', 2);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.showName = function(){
  console.log(this.name);
}

evan.showName();