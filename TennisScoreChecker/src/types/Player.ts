export class PlayerData {   
    constructor( public name: string = '', public gameSets: number[] = [0,0,0]){
        this.name = name;
        this.gameSets = gameSets;
    }

    //Returns the amount of won sets
    get sets() : number {
        return this.gameSets.filter(x => x===6).length;        
    }
}