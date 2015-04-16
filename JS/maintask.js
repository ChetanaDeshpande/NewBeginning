moment=require("moment");
//Today's date:
var d=new Date(); 
console.log(d1=d.toISOString().split("T")[0]);
console.log("-----------------------------------------------------");

var usersArr = [];
var branchesArr = [];
var j = 0;
var cityCount = 1;

//Creating the branches array with the details of each branch:
function Branch(bname,branchid,street,landmark,city){

    this.bname=bname;
    this.branchid=branchid;
    this.street=street;
    this.landmark=landmark;
    this.city=city;
}

for(var k=1; k<=8;k++){

	if((k!=1)&&((k-1)%2===0)){    //Two consecutive branches have the same city.
    	cityCount++;
 	} 

	var branchid = "b" + k;
	var bname = "branch" + k;
	var street = "line" + k;
	var landmark = "line" + k;
	var city = "city" + cityCount;

	branchesArr.push(new Branch(branchid,bname,street,landmark,city));      //push command is similar to assigning each component of an array.
}

//Creating the users array with the details of each user:
var cityCount = 1;

function User(name,dob,street,landmark,city,branch){

	this.name=name;
    this.dob=dob;
	this.street=street;
	this.landmark=landmark;
	this.city=city;
	this.branch=branch;
};


//Generating a random date between two given time frames:
function randomDate(start, end) {
    var dd=new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dd;  
}

for(i=1; i<=20; i++){
	j++;
	
    if((i!=1)&&(i-1)%5===0){     //5 consecutive users are assigned the same city.
        cityCount++;
     } 

    var name = "name" + i;
    var dob = randomDate(new Date(1970, 0, 1), new Date(2000,0,1));    //Define the two time frames for generating the random dates.
    var street = "line" + i;
    var landmark = "line" + i;
    var city = "city" + cityCount;


    usersArr.push(new User(name,dob,street,landmark,city));
}

//Assigning each user to a branch within the same city as the user:
for(var u = 0; u < usersArr.length; u++){
	var userCity = usersArr[u].city
	var branchesWithSameCity = branchesArr.filter(function(branch){
		return branch.city === userCity
	})
	
	for(var b = 0; b < branchesWithSameCity.length; b++){
		var currentBranchID = branchesWithSameCity[b].branchid;
		if(u !== 0){
			lastUser = usersArr[u-1]	
   			if(lastUser.branch !== currentBranchID){            //This is to check if a user is already assigned with a branch.
   				usersArr[u].branch = currentBranchID;
   				break;
			}
		}
		else{
			usersArr[u].branch = currentBranchID;
			break;
		}
	}
}

console.log(usersArr);
 console.log("-----------------------------------------------------");

console.log(branchesArr);
 console.log("-----------------------------------------------------");

//Finding all users under the age of 30:
moment(d).format();

for(var i=0; i< usersArr.length; i++){
 	moment(usersArr[i].dob).format();
 	var age=moment().diff(usersArr[i].dob, "years");
 		if(age < 30){
 	 	console.log(usersArr[i].name, age)
 		}
 }

 console.log("-----------------------------------------------------");

//Filtering the cities from the branches data to find out which branches come under each city:
 var cityArr =[]; 
 var filterCities = branchesArr.map(function(c){
 	return c.city;
 });

 var uniqueCities = []

 for (var i=0; i<filterCities.length; i++){
 	
 	if(uniqueCities.indexOf(filterCities[i])===-1){
 		uniqueCities.push(filterCities[i])
 	}
 }
 console.log(uniqueCities);

 console.log("-----------------------------------------------------");

var newArr = [];
var newArr1 =[];

//Finding all branches that come in a city by comparing the city of each element of the branches data:
for (var i=0; i<uniqueCities.length; i++){
	var city = uniqueCities[i];
	var branchesInCity = [];
	for (j=0;j<branchesArr.length; j++){
	 	if(city === branchesArr[j].city){
	 		branchesInCity.push(branchesArr[j].branchid)
	 	}
	}
	
//Similarly, finding each user assigned to the same branch: 
	for (var k=0; k<branchesInCity.length; k++){
		var branches = branchesInCity[k];
		var userInBranch = [];
		for (l=0;l<usersArr.length; l++){
				if(branches === usersArr[l].branch){
					userInBranch.push(usersArr[l].name)
				}
		}

		branchWithUsers = {
			branches: branches,
			users: userInBranch
		}
		newArr1.push(branchWithUsers);
		
	}
	cityWithBranches = {
		city: city,
		branches: newArr1			
	}
	
	newArr.push(cityWithBranches);        //Getting the final filtered data.
}
console.log(JSON.stringify(newArr));      //Printing the sorted data horizontally.