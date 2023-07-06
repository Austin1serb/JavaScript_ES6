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

class Sensi extends Ninja {
    constructor(name,health,speed,strength,wisdom) {
        super(name,health,speed,strength,wisdom);
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10;
        console.log('New Sensi')
    }
    speakWidsome(){
        super.drinkSake();
        console.log("I'm wisdomless");
    }
}

const Splinter = new Sensi("Splinter");
const austin = new Ninja("Austin");
austin.drinkSake();
Splinter.speakWidsome();
console.log(Splinter);
