import MatchData from "../types/MatchData";
import Chance from 'chance'
import { PlayerData } from "../types/Player";

//Create the dummy prop data for the test
function GetDummyMatchData(): MatchData {
    const chance = new Chance();

    let p1GameCounts : number[] = [];
    let p2GameCounts : number[] = [];

    //Get random names
    for (let i = 0; i < 3; i++) {
        //Set random gameCount
        p1GameCounts[i] = chance.integer({ min: 0, max: 5 })
        p2GameCounts[i] = chance.integer({ min: 0, max: 5 })

        //Set higher value to 6 to fake win set, will prefer Y if equal.
        if (p1GameCounts[i] > p2GameCounts[i]) {
            p1GameCounts[i] = 6;
        }
        else {
            p2GameCounts[i] = 6;
        }

        if (p1GameCounts.filter(x => { return x === 6; }).length >= 2 ||
            p2GameCounts.filter(x => { return x === 6; }).length >= 2)
            break;
    }
    
    const playerX = new PlayerData(chance.name(), p1GameCounts);
    const playerY = new PlayerData(chance.name(), p2GameCounts);

    return new MatchData('01', playerX, playerY);
}

export default GetDummyMatchData;