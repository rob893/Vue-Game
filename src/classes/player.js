import { Unarmed } from "./unarmed";
import { Weapon } from "./weapon";
import { Character } from "./character";

export class Player extends Character {

    constructor(name) {
        super(name, 100);

        /**
         * @type {Weapon}
         */
        this.weapon = new Unarmed();
    }

    /**
     * @param {Weapon} newWeapon 
     */
    equipWeapon(newWeapon) {
        this.log.push(this.name + " has equipped " + newWeapon.name + "!");
        this.weapon = newWeapon;
    }

    damageTarget() {
        if (this.target === null) {
            this.log.push(this.name + " has no target to attack!");
            return;
        }

        if (this.isDead) {
            return;
        }

        this.target.takeDamage(this.weapon.damage);
    }
}