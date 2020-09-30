// **************47 PROJECT POKIMON LITE*****************************

class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(...nameOfAttack) {
    this.skills.push(...nameOfAttack);

    return this.skills;
  }

  showStatus() {
    return `The pokemon ${this.name} has ${this.health} health and ${this.magic} left`;
  }

  attack(attackIndex, pokemonAttacked) {
    if (this.magic < 0) {
      return `${this.name} has no magic left.`;
    }
    if (this.magic < this.skills[attackIndex].amount_of_magic) {
      return `${this.name} cannot attack.`;
    }
    pokemonAttacked.health =
      pokemonAttacked.health - this.skills[attackIndex].amount_of_damage;
    this.magic = this.magic - this.skills[attackIndex].amount_of_magic;
    return `Attack was successful!`;
  }

  getMagic(amount) {
    this.magic = this.magic + amount;
    return this.showStatus();
  }
}

class AttackSkill {
  constructor(attack_name, amount_of_damage, amount_of_magic) {
    this.attack_name = attack_name;
    this.amount_of_damage = amount_of_damage;
    this.amount_of_magic = amount_of_magic;
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

console.log(pikachu);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

console.log(pikachu.skills);

console.log(pikachu.attack(0, bulbasaur));

console.log(bulbasaur.attack(0, pikachu));

console.log(pikachu.showStatus());

console.log(bulbasaur.showStatus());

console.log(pikachu.showStatus());

console.log(pikachu.getMagic(15));

pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
