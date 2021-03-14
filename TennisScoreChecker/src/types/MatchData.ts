import { PlayerData } from "./Player";

export class MatchData {
    constructor( public playerX : PlayerData = null, public playerY : PlayerData = null) {
        this.playerX = playerX;
        this.playerY = playerY;
    }

    //Returns the amount of played sets for this match
    get totalSets() : number {
        return this.playerX.sets + this.playerY.sets;
    }

    get winner() : PlayerData {
        return this.playerX.sets > this.playerY.sets ? this.playerX : this.playerY;
    }
}