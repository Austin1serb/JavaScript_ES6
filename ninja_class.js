class Ninja {
    constructor(name,health,speed,strength) {
            this.name = name;
            this.health = 90;
            this.speed = 3;
            this.strength = 3;
        }
        sayName(){
            console.log(this.name);
        }
        showStats(){
            console.log("Your health is " + this.health, "Your speed is " + this.speed, "Your Stregnth is " + this.strength);
        }
        drinkSake(){
            this.health += 10;
            console.log('your health is now ' + this.health);
        }
}
const austin = new Ninja("Austin");
austin.drinkSake();
console.log(austin);