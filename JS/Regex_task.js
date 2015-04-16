
var obj = {
	name : "chetana deshpande",
	email: "chetana@artoo.co.in",
	phone: "8862-789-098",
	url: "www.artoo.in",
	ip: "192.168.10.10",
	image: "abc1.jpeg",
	username: "chetana@12",
	password: "hugvh#1526"
}

console.log(obj);


if (obj.email.match(/[a-z0-9._%+-]+@[a-z-]+(\.[a-z]{2,4}){2}/)){
	console.log("email is valid");
}
else
	console.log("email is not valid");
if (obj.phone.match(/^[0-9]([0-9 + -]*)[0-9]$/)){
	console.log("phone number is valid");
}
else
	console.log("phone number is not valid");
if (obj.url.match(/((http|htts)\:\/\/)|((www)\.)+[a-z0-9._%+-]/)){
	console.log("url is valid");
}
else
	console.log("url is not valid");
if (obj.ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)){
	console.log("ip is valid");
}
else
	console.log("ip is not valid");
if (obj.image.match(/[^\s]+(\.(jpeg|png|gif|jpg))/)){
	console.log("image exists");
}
else
	console.log("image does not exist");
if (obj.name.match(/\w{3,}(\s\w{3,})+/)){
	console.log("name exists");
}
else
	console.log("name does not exist");
if (obj.username.match(/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{3,}/)){
	console.log("username is valid");
}
else
	console.log("username is not valid");

invalid_patterns = obj.name.split(/\s/g);
invalid_patterns.push(obj.email.split("@")[0])

for (var i=0; i<invalid_patterns.length; i++){
if (obj.password.match(invalid_patterns[i]))	{
	console.log("password cannot exist")
}}
if (obj.password.match(/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}/)){
	console.log("password is valid");
}
else
	console.log("password is not valid");

