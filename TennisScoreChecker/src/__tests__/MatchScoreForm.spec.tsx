import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import MatchScoreForm from '../components/MatchScoreForm'
import Chance from 'chance'
import { MatchData } from "../types/MatchData"
import { PlayerData } from "../types/Player"

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getAllByRole : any;
        let matchData = GetDummyData();

        beforeEach(async () => {
            ({getAllByRole} = render
                (<MatchScoreForm 
                    playerX={matchData.playerX} 
                    playerY={matchData.playerY}
                    winner={matchData.winner}
                    totalSets={matchData.totalSets}/>))
        });

        it ("Displays both players' matchData", () => {
            //Check that two players were made            
            let rows = getAllByRole('row');
            expect(rows.length).toEqual(2);

            //Check that they have different styling (ie; one is a winner)
            let winner = 0;
            let loser = 1;
            if (matchData.playerY.sets > matchData.playerX.sets)
            {
                winner = 1;
                loser = 0;
            }

            expect(rows[winner]).toHaveClass('winnerTable');
            expect(rows[loser]).toHaveClass('loserTable');
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
        props.playerX.gameSets[i] = chance.integer({min: 0, max: 5})
        props.playerY.gameSets[i] = chance.integer({min: 0, max: 5})

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
