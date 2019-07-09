export class Character {

    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.isDead = false;

        /**
         * @type {Character}
         */
        this.target = null;
    }

    /**
     * @param {string[]} log 
     */
    setLog(log) {
        this.log = log;
    }

    takeDamage(amount) {
        this.health -= amount;
        this.log.push(this.name + " took " + amount + " damage!");

        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.isDead = true;
        this.log.push(this.name + " has died!");
    }

    /**
     * @param {Character} target 
     */
    setTarget(target) {
        this.target = target;
    }
}