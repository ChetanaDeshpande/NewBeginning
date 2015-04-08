var friends={

bill:{
    firstName: "Bill",
    lastName: "John",
    number: 5335678,
    address: ["no 34", "jayanagar", "bangalore"]
},
steve:{
   firstName: "Steve",
    lastName: "Johnson",
    number: 533567867,
    address: ["no 34", "9th block", "jayanagar", "bangalore"]
},
rachel:{
   firstName: "Rachel",
    lastName: "Jonathan",
    number: 533567888678,
    address: ["no 34", "1st block", "jayanagar", "bangalore"]
}
}
var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }}
  var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};
  

/*Output:
{ firstName: 'Steve',
  lastName: 'Johnson',
  number: 533567867,
  address: [ 'no 34', '9th block', 'jayanagar', 'bangalore' ] }
{ firstName: 'Steve',
  lastName: 'Johnson',
  number: 533567867,
  address: [ 'no 34', '9th block', 'jayanagar', 'bangalore' ] }
{ firstName: 'Bill',
  lastName: 'John',
  number: 5335678,
  address: [ 'no 34', 'jayanagar', 'bangalore' ] }*/
