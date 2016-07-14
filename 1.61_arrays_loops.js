//you can use for loops to make arrays easier
//instead of typing:
//text += dreamCars[0] + "<br>"; 
//text += dreamCars[1] + "<br>"; 
//text += dreamCars[2] + "<br>";
//text += dreamCars[3] + "<br>"; 
//text += dreamCars[4] + "<br>"; 
//text += dreamCars[5] + "<br>";

//You can type:

var dreamCars = ["Miata", "Lambo", "Bimmer", "Masarati"]
var text = ""
var i;

for (i = 0; i < dreamCars.length; i++) { 
    text += dreamCars[i] + "<br>";
}
// it should run: Miata
//                Lambo
//                Bimmer
//                Masarati
  
  
