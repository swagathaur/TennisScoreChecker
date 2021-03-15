export class PlayerData {   
    constructor( public name: string = '', public wonGameCounts: number[] = [0,0,0]){
        this.name = name;
        this.wonGameCounts = wonGameCounts;
    }

    //Returns the amount of won sets
    get takenSets() : number {
        return this.wonGameCounts.filter(x => x===6).length;        
    }
}