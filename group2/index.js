class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkills(aSkill) {
    this.aSkill = aSkill;
    this.skills.push(this.aSkill);
    console.log("succesfully added to skills");
  }
  showStatus() {
    if (this.health > 0) {
      console.log(`${this.name} status:
    health: ${this.health}
    magic: ${this.magic}`);
    } else {
      console.log(`${this.name} status: DEAD!`);
    }
  }
  attack(num, enemy) {
    this.num = num;
    this.enemy = enemy;
    this.attackName = this.skills[num]["attack_name"];
    this.requiredMagic = this.skills[num]["attack_magic"];
    this.causedDamage = this.skills[num]["attack_damage"];
    //if the enemy is already dead:
    if (this.enemy.health <= 0) {
      console.log(`${this.enemy.name} is already dead! `);
    }
    //if the player has more health:
    else if (this.health > 0) {
      //if the player has enaogh magic to lauch this attack:
      if (this.magic >= this.requiredMagic) {
        this.magic -= this.requiredMagic;
        console.log(
          `${this.name} launched skill ${this.attackName} successfully`
        );
        this.enemy.health -= this.causedDamage;

        console.log(`${this.enemy.name} got ${this.causedDamage} damage`);
      }
      if (this.enemy.health <= 0) {
        console.log(`${this.enemy.name} is dead! ${this.name} is the winner`);
      }
      //if there isnt enough magic to launch this attack:
      else {
        console.log(
          `${this.name} has not enough magic, cannot launch ${this.attackName} attack!`
        );
        //check if it can launch other attacks: HAVE PROBLEMS HERE!!
        let enableAttacks = [];
        this.skills.map((skill) => {
          if (skill.attack_magic <= this.magic) {
            enableAttacks.push(skill.attack_name);
          }
        });

        if (enableAttacks != false) {
          console.log(`The attacks he can launch: ${enableAttacks.join(", ")}`);
        } else {
          //if there is no attack to launch
          console.log(
            `${this.name} has not enough magic to launch any attack! Please get magic! `
          );
        }
      }
    }
    //if enemy is alive but player is dead!
    else {
      console.log(`${this.name} is killed.`);
      console.log(`The winner is ${this.enemy.name}`);
    }
    //think about if both of them havent enaugh magic to attack.
  }
  getMagic() {
    this.magic += 20;
    console.log(`${this.name} got 20 magic back.`);
  }
}

class AttackSkill {
  constructor(attack_name, attack_damage, attack_magic) {
    this.attack_name = attack_name;
    this.attack_damage = attack_damage;
    this.attack_magic = attack_magic;
  }
}
//create pikachu and bulbasaur
let pikachu = new Pokemon("pikachu", 200, 100);
console.log(pikachu);
let bulbasaur = new Pokemon("bulbasaur", 150, 120);
console.log(bulbasaur);
//create lightning and soundshock and teach them to Pikachu
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkills(lightning);
let soundShock = new AttackSkill("soundshock", 20, 20);
pikachu.learnAttackSkills(soundShock);
console.log(pikachu.skills);
//create poisonseed and tailkick and teach them to Bulbasaur
let poisonSeed = new AttackSkill("poisonSeed", 50, 40);
bulbasaur.learnAttackSkills(poisonSeed);
let tailKick = new AttackSkill("tailKick", 10, 20);
bulbasaur.learnAttackSkills(tailKick);
console.log(bulbasaur.skills);

//Game:
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(1, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(1, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(1, bulbasaur);
pikachu.getMagic();
pikachu.attack(1, bulbasaur);
bulbasaur.showStatus();
pikachu.showStatus();
pikachu.getMagic();
pikachu.attack(1, bulbasaur);
bulbasaur.showStatus();
bulbasaur.attack(0, pikachu);
