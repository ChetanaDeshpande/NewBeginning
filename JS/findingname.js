/*jshint multistr:true */
var text = "Hey, how are you doing? \ My name is Chetana. \  blah blah blah Chetana";
var myName = "Chetana";
var hits = [];

for (var i=0; i<text.length; i++)
{
    if (text[i]==="C")
    {
    for(var j=i; j<(i+myName.length); j++)
    { hits.push(text[j]);
    }
}}
if (hits==0)
{console.log("Your name wasn't found!");}
else
{console.log(hits);}


/*Output:
[ 'C', 'h', 'e', 't', 'a', 'n', 'a', 'C', 'h', 'e', 't', 'a', 'n', 'a' ]*/