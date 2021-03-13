import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import TennisScoreForm from '../TennisScoreForm'
import Chance from 'chance'
import { MatchData } from "../types/MatchData"
import { PlayerData } from "../types/Player"

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getByRole : any;
        let props = GetDummyData();

        beforeEach(async () => {
            ({getByRole} = render(<TennisScoreForm props/>))
        });

        it ("Displays both players' matchData", () => {
            //Check correct player names
            expect(getByRole('playerNameField', {name : props.playerX.name})).toContain(props.playerX.name);
            expect(getByRole('playerNameField', {name : props.playerY.name})).toContain(props.playerY.name)
            
            //Check correct game counts, for the correct amount of sets
            for(let x = 0; x < props.totalSets; x++) {                
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : props.playerX.name}))
                        .toContain(props.playerX.gameSets[x]);
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : props.playerY.name}))
                        .toContain(props.playerY.gameSets[x]);
            }
                
            //Check correct setcounts
            expect(getByRole('setRecordField', {name : 'setCount',  player : props.playerX.name}))
                        .toContain(props.playerX.sets);
            expect(getByRole('setRecordField', {name : 'setCount',  player : props.playerY.name}))
                        .toContain(props.playerY.sets);
        });
    });
});

//Create the dummy prop data for the test
function GetDummyData(): MatchData {
    let props : MatchData = new MatchData() ; //TODO :: Create data types
    let chance = new Chance();

    //Get random names
    props.playerX = new PlayerData(chance.name());
    props.playerY = new PlayerData(chance.name());

    for (let i = 0; i < 3; i++) {
        //Set random gameCount
        props.playerX.gameSets[i] = chance.integer({min: 0, max: 6})
        props.playerY.gameSets[i] = chance.integer({min: 0, max: 6})

        //Set higher value to 6 to fake win set, will prefer Y if equal.
        if (props.playerX.gameSets[i] > props.playerY.gameSets[i]) {
            props.playerX.gameSets[i] = 6;
        }
        else {
            props.playerY.gameSets[i] = 6;
        }

        //Break when a player has two sets taken
        if (props.playerX.sets >=2 || props.playerY.sets >= 2)
            break;
    }

    return props;
}
