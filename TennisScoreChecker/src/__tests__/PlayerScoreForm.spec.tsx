import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import Chance from 'chance'
import { MatchData } from "../types/MatchData"
import { PlayerData } from "../types/Player"
import PlayerScoreForm from "../components/PlayerScoreForm"

const { render } = require("@testing-library/react");

describe('<TennisScoreForm />', () => {
    describe('take match data and display it to a table', () => {

        let getByRole: any;
        let getAllByRole: any;
        let matchData = GetDummyData();
        let player = matchData.playerX;

        beforeEach(async () => {
            ({ getByRole, getAllByRole } = render
                (<table><tbody> <PlayerScoreForm
                    player={player}
                    totalSets={matchData.totalSets} />
                </tbody></table>))
        });

        it("Displays both players' matchData", () => {
            //Check correct player names
            expect(getByRole('cell', { name: player.name })).toHaveTextContent(player.name)

            //Check correct game counts, for the correct amount of sets
            for (let x = 0; x < matchData.totalSets; x++) {
                expect(getAllByRole('cell')[x + 1]).toHaveTextContent(player.gameSets[x].toString());
            }

            //Check correct setcounts
            expect(getAllByRole('cell')[matchData.totalSets + 1]).toHaveTextContent(player.sets.toString());
        });
    });
});

//Create the dummy prop data for the test
function GetDummyData(): MatchData {
    let props: MatchData = new MatchData(); //TODO :: Create data types
    let chance = new Chance();

    //Get random names
    props.playerX = new PlayerData(chance.name());
    props.playerY = new PlayerData(chance.name());

    for (let i = 0; i < 3; i++) {
        //Set random gameCount
        props.playerX.gameSets[i] = chance.integer({ min: 0, max: 5 })
        props.playerY.gameSets[i] = chance.integer({ min: 0, max: 5 })

        //Set higher value to 6 to fake win set, will prefer Y if equal.
        if (props.playerX.gameSets[i] > props.playerY.gameSets[i]) {
            props.playerX.gameSets[i] = 6;
        }
        else {
            props.playerY.gameSets[i] = 6;
        }

        //Break when a player has two sets taken
        if (props.playerX.sets >= 2 || props.playerY.sets >= 2)
            break;
    }

    return props;
}
