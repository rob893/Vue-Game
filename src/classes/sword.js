import { Weapon } from "./weapon";

export class Sword extends Weapon {

    constructor() {
        super();
        this.name = "Sword";
        this.damage = 15;
    }
}