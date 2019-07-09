<template>
    <div>
        <button @click="playerAttack()">Attack!</button>
        <button @click="equipSword()">Equip Sword!</button>
        <button @click="printGame()">Print Game</button>
        <ul>
            <li v-for="(item, index) in log" v-bind:key="index">
                {{ item }}
            </li>
        </ul>
        
    </div>
</template>

<script>

import { Player } from "./../classes/player";
import { Monster } from "./../classes/monster";
import { Sword } from "./../classes/sword";

export default {
    name: "Game",

    data() {
        return {
            log: [],
            player: new Player("Bob"),
            monster: new Monster()
        };
    },

    methods: {
        playerAttack() {
            this.player.damageTarget();
        },

        equipSword() {
            this.player.equipWeapon(new Sword());
        },

        printGame() {
            console.log(this.player);
            console.log(this.monster);
        }
    },

    created() {
        this.player.setLog(this.log);
        this.monster.setLog(this.log);
        this.player.setTarget(this.monster);
        this.monster.setTarget(this.player);
    }
};

</script>