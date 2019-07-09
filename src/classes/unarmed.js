import { Weapon } from "./weapon";

export class Unarmed extends Weapon {

    constructor() {
        super();
        this.name = "Unarmed";
        this.damage = 5;
    }
}