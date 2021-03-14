import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import FileToMatchConverter from "../components/FileToMatchConverter"
import ConvertTextfileToMatchdata from "../components/FileToMatchConverter"
import MatchData from "../types/MatchData"
const { render } = require("@testing-library/react");

describe('ConvertTextfileToMatchdata()', () => {
    const file = new File([], "full_tournament")

    //Display data over multiple matches
    describe('take guaranteed-valid file and display matchdata', () => {
        let getAllByRole: any;


        beforeEach(async () => {
            ({ getAllByRole } = render(<FileToMatchConverter fileBlob={file} />))
        })

        it("Converts text to match data and displays them,", () => {
            expect(getAllByRole('row').length).toBeGreaterThanOrEqual(2);
        })
    })

    describe('take guaranteed-valid file and convert to correct data', () => {
        let result : any;

        beforeEach(async () => {
            result = ConvertTextfileToMatchdata(file);
        })

        it("Converts text to match data and displays them,", () => {
            expect(typeof result).not.toEqual('string');
            expect(result.length).toBeGreaterThan(0);
        })
    })
})