var cars = {
	id 		 	: 0,
	maker		: "Mazda",
	carType	: {
		types	: [
			{carId : 1, name: "Miata"},
			{carId : 2, name: "Mazda6"},
			{carId : 3, name: "CX-6"},
			{carId : 4, name: "B2200"},
			{carId : 5, name: "MX-3"}
			]
	}
};

//Access

for(var car in cars.carType.types){
	console.log(cars.carType.types[car].name);
}
