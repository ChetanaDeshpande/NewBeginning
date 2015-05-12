var main = function() {
	var myButton = document.querySelector('button');

	$('button').click(function() {
		var base_url = "http://www.omdbapi.com/";
		var movie_value = $("#t").val();
		var end_value = "&y=&plot=short&r=json";
		var url = base_url+"?t="+movie_value+ end_value;

    	$.getJSON(url, { format: "json" }, function(data) { 
             //console.log(data.Year);
            $("#year").text("("+ data.Year + ")");
            if($("#year").text()==="(undefined)"){
                $("#yourres").text("Sorry, we don't seem to find that movie. Search another, like:");
                $("#year").text("");
            }
            else {
                $("#yourres").text("Here's the movie you asked for:")
                $("#moviename").text(data.Title);
                $("#description").text(data.Plot);
                $("#dirname").text(data.Director);
                $("#writer1").text(data.Writer);
                $("#actor1").text(data.Actors);
                $("#image img").attr("src",data.Poster);
            }
        });  
    })


    $('#readmore-button').click(function(){
        $("#description").text("Loading..");
        var base_url1 = "http://www.omdbapi.com/";
        var movie_value1 = $("#t").val();
        var end_value1 = "&y=&plot=full&r=json";
        var url1 = base_url1+"?t="+movie_value1+ end_value1;

        $.getJSON(url1, { format: "json" }, function(data1) { 
            console.log(data1.Plot);
            $("#description").text(data1.Plot);
        });
    })

    $('#readless-button').click(function(){
        $("#description").text("Loading..");
        var base_url = "http://www.omdbapi.com/";
        var movie_value = $("#t").val();
        var end_value = "&y=&plot=short&r=json";
        var url = base_url+"?t="+movie_value+ end_value;

        $.getJSON(url, { format: "json" }, function(data) { 
            $("#description").text(data.Plot);
        }); 
    })
}

$(document).ready(main);