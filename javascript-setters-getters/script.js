class Airplane{

    constructor(name, occupancy, speed){
        //validate name shouldn't be empty
        if (name == ''){ 
            throw new Error("Name cannot be empty");
        }
        this.name = name;

        //validate occupancy shouldn't be empty or negative or more then 180
        if (occupancy == '' || occupancy < 0 || occupancy > 180){ 
            throw new Error("Occupancy cannot be empty, negative or greater then 180");
        }
        this.occupancy = occupancy;

        //validate speed shouldn't be empty or negative or more then 900
        if (speed == '' || speed < 0 || speed > 900){ 
            throw new Error("Speed cannot be empty, negative or greater then 900");
        }
        this.speed = speed;
    }
    

    //status method to log the details to the console
    status(){
        console.log("Airplane : "+this.name+" with "+this.occupancy+" occupancy, is moving at "+this.speed+" km/hr");
    }
    
    //increase the speed with thhe given value
    increaseSpeed(value){
        this.speed+= value;
    }
    
    //decrease the speed with thhe given value
    decreaseSpeed(value){
        this.speed-= value;
    }   

}

//create 3 Airplane objects and call their print methods
console.log("create 3 Airplane objects and call their print methods");
console.log("------------------------------------------------------");
let objAirplane1 = new Airplane('Boeing 777',180,900);
objAirplane1.status();
let objAirplane2 = new Airplane('Boeing 555',100,500);
objAirplane2.status();
let objAirplane3 = new Airplane('Boeing 333',50,300);
objAirplane3.status();
console.log("------------------------------------------------------");

//increase speed of airplane objects by 200
console.log("increase speed of airplane objects by 200");
console.log("-----------------------------------------");
objAirplane1.increaseSpeed(200);
objAirplane1.status();
objAirplane2.increaseSpeed(200);
objAirplane2.status();
objAirplane3.increaseSpeed(200);
objAirplane3.status();
