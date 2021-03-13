class PlayerData {   
    constructor( public firstName: string, public gameSets: number[], ){
        this.firstName = firstName;
        this.gameSets = gameSets;
    }

    //Returns the amount of won sets
    get sets() {
        return this.gameSets.filter(x => x===6).length;        
    }
}