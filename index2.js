
//The pokemon constructor needs: name, health, magic & an array of skills

class Pokemon{
    constructor(name, health, magic){
        this.name = name
        this.health = health
        this.magic = magic // 30 
        this.skills = [
            // Examples of the skills a Pokemon can learn from the        AttackSkills class:
            //{ attackName :"lighting" , magic: 40 , damage:30},
            //{ attackName :"Pound" , magic: 20 , damage:30},
        ];
    }

//Skills need to be learnt and stored in the Skills array. 
    learnSkill(item){
        this.skills.push(item);
        console.log(`${this.name} has learnt ${this.skills}`);
    };

// Using the 'this' keyword to access the pokemons health and magic points and logging them    
    showStatus(){
        if(this.health <= 0){
            console.log(`Poor ${this.name} is dead!`);
        }else{
            console.log(`${this.name} has ${this.health} health left and ${this.magic} magic left!`);
        }
        
    }

// Making use of the addition operator to help the Pokemon get magic back
    getMagic(){
        let available = 100;
        this.magic += available;
    }

//Thinking about the different outcomes of an attack. How does the attack affet the Pokemon who gives the attack? What happens to the target pokemon if the attack is successful? What happens if the attack causes an excess amount of damage to the target Pokemon? By utilising the "this" keyword and the target keyword to relate to each Pokemon and using simple arithmatic we can see how the attacks affect each pokemon. 
    attack(index, target){
        if(this.magic > this.skills[index].magic  && target.health > 0){
            this.magic = this.magic - this.skills[index].magic ;
            console.log(" the magic now is : " , this.magic);
            target.health = target.health - this.skills[index].damage;
            console.log("the health of ",target.name, "is : ",target.health);
            if(target.health <=0 ){
                console.log(`the targeted pokemon ${target.name} is killed `);
            }

   
        }
        else if(target.health <= 0 ){
            console.log(`the targeted pokemon ${target.name} is already dead `);
        }
        else {
            console.log(`the  pokemon ${this.name} have not enogh magic to lunch attack  `);
        }
        
    }
};

// The attackSkill that, when a Pokemon is calls learnSkill(), will push an object of this class to the skills array
class AttackSkill {
    constructor(attackName, damage, magic){
        this.attackName = attackName
        this.damage = damage
        this.magic = magic
    }
}


// The Pokemon --------------------------------------------------
let pikachu = new Pokemon('Pikachu', 100, 100);
let chikorita = new Pokemon('Chickorita', 90, 100);
let haxorus = new Pokemon('Haxorus', 90, 90);
let articuno = new Pokemon('Articuno', 100, 110);
let popplio = new Pokemon('Popplio', 80, 90);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// The Attacks --------------------------------------------------
let pound = new AttackSkill('Pound!', 40, 30);
let lightning = new AttackSkill("lightning!", 40, 30);
let fireBreathe = new AttackSkill('Fire Breathe', 50, 40);
let gust = new AttackSkill('Gust!', 30, 20);
let fly = new AttackSkill('Fly!', 20, 10);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

// pikachu.learnSkill(pound)
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);


// bulbasaur.attack(0, pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);

pikachu.learnSkill(lightning);
bulbasaur.learnSkill(poisonSeed);
console.log(pikachu.skills);
console.log(bulbasaur.skills);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.learnSkill(fly);
