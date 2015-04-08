var user=prompt("input your choice").toUpperCase();
var i=0; j=0;
switch(user){
    case 'ONE':
        if(i==0)
        console.log("cool");
        else
        console.log("uncool");
        break;
    case 'TWO':
        if(i==0&&j==0)
        console.log("okay");
        else
        console.log("not okay");
        break;
    case 'THREE':
        if(i==0||j==0)
        console.log("bad");
        else
        console.log("good");
        break;
    default:
        console.log("enter one, two or three only");
}


/*Output:
cool*/
