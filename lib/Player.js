const Potion = require("../lib/Potion.js");
const Character = require('./Character.js');

class Player extends Character{
    constructor(name = ''){
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    //returns an object with various player properties
    getStats = function(){
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //returns the inventory array or false if empty
    getInventory = function(){
        if(this.inventory.length){
            return this.inventory;
        }

        return false;
    };

    //adds a potion object to the player's inventory array
    addPotion = function (potion) {
        this.inventory.push(potion);
    };


    //uses a potion from the inventory on a player
    usePotion = function(index){
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name){
            case 'agility':
            this.agility += potion.value;
            break;
            case 'health':
            this.health += potion.value;
            break;
            case 'strength':
            this.strength += potion.value;
            break;
        }
    }
}


module.exports = Player;