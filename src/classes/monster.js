import { Character } from "./character";

export class Monster extends Character {

    constructor() {
        super("Ugly Monster", 75);
        this.damage = 10;
    }

    takeDamage(amount) {
        super.takeDamage(amount);
        this.damageTarget();
    }

    damageTarget() {
        if (this.target === null) {
            this.log.push(this.name + " has no target to attack!");
            return;
        }

        if (this.isDead) {
            return;
        }

        this.target.takeDamage(this.damage);
    }
}