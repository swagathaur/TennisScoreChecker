import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import FileToMatchConverter, { ConvertTextfileToMatchdata } from "../components/FileToMatchConverter"
import { render, within } from "@testing-library/react"
import MatchData from "../types/MatchData"
import { PlayerData } from "../types/PlayerData"

describe('ConvertTextfileToMatchdata()', () => {
    //This string is ugly, but reading in a file through the test library was taking too long to figure out. Its a strict === to the actual tourny file contents.
    const file = 'Match: 01\r\nPerson A vs Person B\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\nMatch: 02\r\nPerson A vs Person C\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n0\r\n0\r\n0\r\n0\r\n\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n'
    const assumedData = new MatchData('01', new PlayerData('Person A', [6,6,0]), new PlayerData('Person B'));

    //Display data over multiple matches
    describe('take guaranteed-valid file and display matchdata', () => {
        let getAllByRole: any;

        let result = ConvertTextfileToMatchdata(file);

        beforeEach(async () => {
            ({ getAllByRole } = render(<FileToMatchConverter contents={file} />))
        })

        it("Converts text to accurate match data", () => {
            expect(getAllByRole('heading')[0]).toHaveTextContent(assumedData.id);

            //Check Player1s parsed data is correct
            expect(getAllByRole('cell')[0]).toHaveTextContent(assumedData.playerX.name);
            expect(getAllByRole('cell')[1]).toHaveTextContent(assumedData.playerX.wonGameCounts[0].toString());
            expect(getAllByRole('cell')[2]).toHaveTextContent(assumedData.playerX.wonGameCounts[0].toString());
            expect(getAllByRole('cell')[3]).toHaveTextContent((assumedData.playerX.takenSets).toString());

            //Check Player2s parsed data is correct
            expect(getAllByRole('cell')[4]).toHaveTextContent(assumedData.playerY.name);
            expect(getAllByRole('cell')[5]).toHaveTextContent(assumedData.playerY.wonGameCounts[0].toString());
            expect(getAllByRole('cell')[6]).toHaveTextContent(assumedData.playerY.wonGameCounts[0].toString());
            expect(getAllByRole('cell')[7]).toHaveTextContent((assumedData.playerY.takenSets).toString());
        })
    })
})