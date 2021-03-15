import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import MatchScoreForm from '../components/MatchScoreForm'
import GetDummyMatchData from "../util/GetDummyMatchData"

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getAllByRole : any;
        let matchData = GetDummyMatchData();

        beforeEach(async () => {
            ({getAllByRole} = render
                (<MatchScoreForm 
                    playerX={matchData.playerX} 
                    playerY={matchData.playerY}
                    winner={matchData.winner}
                    totalSets={matchData.totalSets}/>))
        });

        it ("Displays both players' matchData", () => {
            //Check that two players were made, all other tests are made within the player form.         
            let rows = getAllByRole('row');
            expect(rows.length).toEqual(3);
        });
    });
});