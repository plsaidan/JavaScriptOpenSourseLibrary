var nums = ['100','300','400','60','40'];
var sum = 0;

for(var i=0; i < nums.length; i++){

    sum += parseInt(nums[i]);

}

alert(sum);

//**************************

//count by 2s to 20
for(var i = 0; i <= 20; i+=2){
	console.log(i)
}

//count by 50, say halfway there at 200
for(var i = 0; i <= 300; i+=50){
	if(i === 100){
		console.log("Halfway There")
	}
	console.log(i)
}

//for loop count to ten but 9 and 10 say nine and ten
for(var i = 0; i <= 10; i++){
	if(i === 9){
		console.log("nine");
	}
	else if(i === 10){
		console.log("ten");
	}else{ 
		console.log(i);
	}
}
