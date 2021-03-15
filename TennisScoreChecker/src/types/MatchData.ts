import { PlayerData } from "./PlayerData";

export class MatchData {
    constructor(public id : string = '00', public playerX : PlayerData = null, public playerY : PlayerData = null) {
        this.id = id;
        this.playerX = playerX;
        this.playerY = playerY;
    }

    //Returns the amount of played sets for this match
    get totalSets() : number {
        return this.playerX.takenSets + this.playerY.takenSets;
    }

    get winner() : PlayerData {
        return this.playerX.takenSets > this.playerY.takenSets ? this.playerX : this.playerY;
    }
}

 export default MatchData;