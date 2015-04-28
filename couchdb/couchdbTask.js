var teamArray=[];

function Team(name, players, games){
	this._id = name.toLowerCase();
	this.name = name;
	this.players = players;
	this.games = games;
}

function Game(result, ratingsOfPlayers){
	this.result = result;
	this.ratingsOfPlayers = ratingsOfPlayers;
}


var teams = ["India", "Pakistan", "South Africa", "Australia", "New Zealand", "England", "Zimbabwe", "West Indies", "Sri Lanka", "Bangladesh"];
var result_array = ["Win", "Lose"];
function roll() {
   	return (Math.floor(Math.random() * 30 + 1));
}

function chooseNumbers(players) {
   	var x = [];
   	palyerRatings = {}
   	for(var k=0; k<11; k++){
   		palyerRatings[players[k]] = roll()
   	}
   	return palyerRatings;
}

function choosePlayers(){
	var playerArr =[];
	for(var j=0; j<11; j++){
		playerArr[j] = "Player " + parseInt(j+1);
	}
	return playerArr;
}


for (var i=0; i<teams.length; i++){
	var _id = teams[i];
	var players = choosePlayers();
	
	games = []
	for(var l=1; l<=20; l++){
		var result = result_array[Math.floor(Math.random() * result_array.length)];
		var ratingsOfPlayers = chooseNumbers(players);
		games.push(new Game(result, ratingsOfPlayers))
	}

	teamArray.push(new Team(_id,players,games));
}

result = {
	"docs": JSON.stringify(teamArray)
}
console.log(JSON.stringify(result));	