import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import GetDummyMatchData from "../util/GetDummyMatchData"
import PlayerScoreForm from "../components/PlayerScoreForm"

const { render } = require("@testing-library/react");

describe('<PlayerScoreForm />', () => {
    describe('take match data and check the displayed contents accuracy', () => {

        let getByRole: any;
        let getAllByRole: any;
        let matchData = GetDummyMatchData();
        let player = matchData.playerX;

        beforeEach(async () => {
            ({ getByRole, getAllByRole } = render
                (<table>
                    <tbody> <PlayerScoreForm
                        player={player}
                        totalSets={matchData.totalSets} />
                    </tbody>
                </table>))
        });

        it("Displays both players' matchData", () => {
            //Check correct player names
            expect(getByRole('cell', { name: player.name })).toHaveTextContent(player.name);

            //Check correct game counts, for the correct amount of sets
            for (let x = 0; x < matchData.totalSets; x++) {
                expect(getAllByRole('cell')[x + 1]).toHaveTextContent(player.wonGameCounts[x].toString());
            }

            //Check correct setcounts
            expect(getAllByRole('cell')[matchData.totalSets + 1]).toHaveTextContent(player.takenSets.toString());
        });
    });
});