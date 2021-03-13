import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import TennisScoreForm from '../TennisScoreForm'
import Chance from 'chance'

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getByRole;
        let props = GetDummyData();

        beforeEach(async () => {
            ({getByRole} = render(<TennisScoreForm props/>))
        });

        it ("Displays both players' matchData", () => {
            //Check correct player names
            expect(getByRole('playerNameField', {name : props.playerX.firstName})).toContain(props.playerX.firstName);
            expect(getByRole('playerNameField', {name : props.playerY.firstName})).toContain(props.playerY.firstName)
            
            //Check correct game counts, for the correct amount of sets
            for(let x = 0; x < props.totalSets; x++) {                
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : props.playerX.firstName}))
                        .toContain(props.playerX.gameSet[x]);
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : props.playerY.firstName}))
                        .toContain(props.playerY.gameSet[x]);
            }
                
            //Check correct setcounts
            expect(getByRole('setRecordField', {name : 'setCount',  player : props.playerX.firstName}))
                        .toContain(props.playerX.sets);
            expect(getByRole('setRecordField', {name : 'setCount',  player : props.playerY.firstName}))
                        .toContain(props.playerY.sets);
        });
    });
});

//Create the dummy prop data for the test
function GetDummyData(): any {
    let props : any ; //TODO :: Create data types
    let chance = new Chance();

    //Get random names
    props.playerX = chance.name();
    props.playerY = chance.name();

    //Get total setCount
    props.totalSets = chance.integer({min: 2, max: 3})
    
    //Set base set counts
    props.playerX.sets = 0;
    props.playerX.sets = 0;

    for (let i = 0; i < props.totalSets; i++) {
        //Set random gameCount
        props.playerX.gameSet[i] = chance.integer({min: 0, max: 6})
        props.playerY.gameSet[i] = chance.integer({min: 0, max: 6})

        //Set higher value to 6 to fake win set, will prefer Y if equal.
        if (props.playerX.gameSet[i] > props.playerY.gameSet[i]) {
            props.playerX.gameSet[i] = 6;
            props.playerX.sets++;
        }
        else {
            props.playerY.gameSet[i] = 6;
            props.playerY.sets++;
        }
    }
}
