const Potion = require("../lib/Potion.js");

function Player(name = ''){
    this.name = name;

    this.health = Math.floor(Math.random()*10+95);
    this.strength = Math.floor(Math.random()*5+7);
    this.agility = Math.floor(Math.random()*5+7);

    this.inventory = [new Potion('health'), new Potion()];
}

//returns an object with various player properties
Player.prototype.getStats = function(){
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//returns the inventory array or false if empty
Player.prototype.getInventory = function(){
    if(this.inventory.length){
        return this.inventory;
    }

    return false;
};

//returns a string containg a statement updating the user on their current health
Player.prototype.getHealth = function(){
    return `${this.name}'s halth is now ${this.health}!`;
};

//checks if the player is alive 
Player.prototype.isAlive = function(){
    if(this.health === 0){
        return false;
    }

    return true;
};

//reduces the health of a player by a certain amount
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0){
        this.health = 0;
    }
};

//obtains the players attack value
Player.prototype.getAttackValue = function(){
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
}

//adds a potion object to the player's inventory array
Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};


//uses a potion from the inventory on a player
Player.prototype.usePotion = function(index){
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name){
        case 'agaility':
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
module.exports = Player;