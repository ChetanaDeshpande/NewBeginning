var Artoo = function(Hello){
  Artoo.Hello = "A member of the Artoo family:";
   console.log(Artoo.Hello);
 }


 function Geek(names, functions) {
  Artoo.call(this);
  Geek.names = names
  Geek.functions = "Engineering"
  console.log(Geek.names + " is a Geek with tasks regarding " + Geek.functions);
}
Geek.prototype = Object.create(Artoo.prototype);


function RainMaker(names, functions) {
  Artoo.call(this);
  RainMaker.names = names;
  RainMaker.functions = "Business"
  console.log(RainMaker.names + " is a RainMaker with tasks regarding " + RainMaker.functions);
}
RainMaker.prototype = Object.create(Artoo.prototype);


function StoryTeller(names, functions) {
  Artoo.call(this);
  StoryTeller.names = names;
  StoryTeller.functions = "Writes"
  console.log(StoryTeller.names + " is a StoryTeller who " + StoryTeller.functions);
}
StoryTeller.prototype = Object.create(Artoo.prototype);


function FireFighter(names, functions) {
  Artoo.call(this);
  FireFighter.names = names;
  FireFighter.functions = "Customer Success"
  console.log(FireFighter.names + " is a FireFighter with tasks regarding " + FireFighter.functions);
}
FireFighter.prototype = Object.create(Artoo.prototype);

function Intern(names, functions) {
  Artoo.call(this);
  Intern.names = names;
  Intern.functions = "Learning"
  console.log(Intern.names + " is an Intern who is " + Intern.functions);
}
Intern.prototype = Object.create(Artoo.prototype);

var names = new Geek("Sameer");
var names = new StoryTeller("Indus");
var names = new RainMaker("Kavitha");
var names = new Geek("Shubham");
var names = new Geek("Kaushik");
var names = new RainMaker("Akhila");
var names = new Geek("Dilip");
var names = new Geek("Shrivatsa");
var names = new Geek("Shameer");
var names = new RainMaker("Sowmya");
var names = new FireFighter("Jagan");
var names = new Intern("Chetana");
var names = new Intern("Basavaraj");
