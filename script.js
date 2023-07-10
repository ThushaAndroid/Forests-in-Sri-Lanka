function main(){
    var y=document.getElementById("x").value;
    console.log("You have clicked the search button");
    alert("Searching your "+y);
}

function submit(){


	let fn=document.getElementById("fname").value;
	let ln=document.getElementById("lname").value;
	let add=document.getElementById("Address").value;
	let lan=document.getElementById("Language").value;
	let N=document.getElementById("NO").value;
	let age=document.getElementById("Age").value;
	let M=document.getElementById("Mail").value;

	let lengthfn=fn.length;
	let lengthln=ln.length;
	let lengthadd=add.length;
	let lengthlan=lan.length;
	let lengtN=N.length;
	let lengtage=age.length;
	let lengtM=M.length;




if(lengthfn==0||lengthln==0||lengthadd==0||lengthlan==0||lengtN==0||lengtage==0||lengtM==0){
document.getElementById("invalid").innerHTML="Your submission is invalid.You have not fill completely the information.";
alert("Your submission is unsuccessfull");
}

else{

let answer=fn+" "+ln;
document.getElementById("finalanswer").innerHTML="Welcome "+answer+".Thank you for registering with us.";

	
if(age<=10 || age>=65){
document.getElementById("finalvalue").innerHTML="Your discount is 50%";
alert("Your submission is successfull");
}
else if(age<=18 || age>=50){
document.getElementById("finalvalue").innerHTML="Your discount is 25%";
alert("Your submission is successfull");
}
else{
document.getElementById("finalvalue").innerHTML="Your discount is 10%";
alert("Your submission is successfull");
}
}	
}