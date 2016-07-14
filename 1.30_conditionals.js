//Boolean Logic and Control Flow

var  currentTemp = 55;
var airConditionerIsOn = false;
var airConditionerIsBroken = false;
var isHotOutside = false;
var niceBreezeOutside = true;
var coldFrontComingIn = true;

if(isHotOutside  === true){
	console.log("It is sweltering out there.");
}

if(isHotOutside){
	console.log("It is super hot.");
}

if(airConditionerIsOn === false){
	console.log("It is hot inside");
}
if(airConditionerIsOn && isHotOutside){
	console.log("Its so hot out there,. im so glad the AC is on");
}

if(airConditionerIsOn || isHotOutside){
	console.log("Turkey Turkey Turkey");
}

if(coldFrontComingIn || niceBreezeOutside){
	console.log("It feels pretty good outside.");
}

if(!isHotOutside){
	console.log()
}

//**ELSE**

if(isHotOutside){
	console.log("Ugh, its so hot.");
}else{
	console.log("Im glad its not hot.");
}

if(niceBreezeOutside){
	console,log("Open the windows");
}else{
	console.log("Turn the AC on");
}

if(!airConditionerIsOn && isHotOutside){
	console.log("Turn the AC on")
}else{
	console.log()
}



//************************************ELSE IF******************************************
if(currentTemp === 100)
	console.log("Dang, its hella hot")
else if(currentTemp === 85)
	console.log("its pretty hot today")
else if(currentTemp === 55)
	console.log("its cooler outside")
else
	console.log("lets the check")
