function bmi(){
	let h=document.getElementById("h").value;
	let w=document.getElementById("w").value;
	let ans=w/(h/100*h/100);
	let bmio=(ans.toFixed(2));
	document.getElementById("result").innerHTML="Your BMI is "+bmio;
	console.log("Change from master branch");
	console.log("Conflict changes added in master");
	console.log("checking branching structure");
}

