import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import TennisScoreForm from '../TennisScoreForm'

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getByRole;
        let props;

        beforeEach(async () => {
            ({getByRole} = render(<TennisScoreForm props/>))
        })

        it ("Displays both players' matchData", () => {
            expect(getByRole('playerNameField', {name : 'playerX'})).toContain(props.playerX.firstname);
            expect(getByRole('playerNameField', {name : 'playerY'})).toContain(props.playerY.firstname)
            
            for(let x = 0; x < props.totalSets; x++) {                
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : 'playerX'}))
                        .toContain(props.playerX.gameSet[x].games);
                    expect(getByRole('gameRecordField', {name : 'gamesCount', gameSet : x, player : 'playerY'}))
                        .toContain(props.playerY.gameSet[x].games);
            }
                
            expect(getByRole('setRecordField', {name : 'setCount',  player : 'playerX'}))
                        .toContain(props.playerX.matches);
            expect(getByRole('setRecordField', {name : 'setCount',  player : 'playerY'}))
                        .toContain(props.playerY.sets);
        });
    });
});