var main = function() {
	var myButton = document.querySelector('button');
    var more = 0;

    $("#t").keypress(function (e) {
        if(e.which == 13) { // the enter key code
            $('#search-by-title-button').trigger('click');
            var more = 0;
        }
    });
	$('#search-by-title-button').click(function() {
    
        var movie_value = $("#t").val();

        if (!movie_value){
                    
            $("#t").css("background-color", "rgba(236, 32, 47, 0.46)");
            $("#content").hide();
            $("#error").hide();
            $("#empty").show();
        }

        else {
            $("#t").css("background-color", "white");
            var base_url = "http://www.omdbapi.com/";
            var movie_value = $("#t").val();
            var end_value = "&y=&plot=short&r=json";
            var url = base_url+"?t="+movie_value+ end_value;

            $.getJSON(url, { format: "json" }, function(data) { 

                if(data.Error){
                            
                    $("#content").hide();
                    $("#error").show();
                    $("#empty").hide();
                }

                else {
                           
                    $("#error").hide();
                    $("#content").show();
                    $("#empty").hide();
                    $("#yourres").text("Here's the movie you asked for:")
                    $("#moviename").text(data.Title);
                    $("#year").text("("+data.Year+")");
                    $("#description").text(data.Plot);
                    $("#dirname").text(data.Director);
                    $("#writer1").text(data.Writer);
                    $("#actor1").text(data.Actors);
                    $("#image img").attr("src",data.Poster);
                    $('#readmore-button').show();
                }   
            }); 
        } 
    })

    var more = 0;
    
    $('#readmore-button').click(function(){

        if(more===0){
            $('#readmore-button').text("Read Less");
            $("#description").text("Loading..");
            var base_url1 = "http://www.omdbapi.com/";
            var movie_value1 = $("#t").val();
            var end_value1 = "&y=&plot=full&r=json";
            var url1 = base_url1+"?t="+movie_value1+ end_value1;

            $.getJSON(url1, { format: "json" }, function(data1) {
                $("#description").text(data1.Plot);
                more=1;
            });
        }

        else { 
            $('#readmore-button').text("Read More");
            $("#description").text("Loading..");
            var base_url = "http://www.omdbapi.com/";
            var movie_value = $("#t").val();
            var end_value = "&y=&plot=short&r=json";
            var url = base_url+"?t="+movie_value+ end_value;

            $.getJSON(url, { format: "json" }, function(data) { 
                $("#description").text(data.Plot);
                more=0;
            }); 
        }
    })
}

$(document).ready(main);