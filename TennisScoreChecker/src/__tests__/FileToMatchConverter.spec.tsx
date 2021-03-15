import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import FileToMatchConverter from "../components/FileToMatchConverter"
import { render } from "@testing-library/react"

describe('ConvertTextfileToMatchdata()', () => {
    //This string is ugly, but reading in a file through the test library was taking too long to figure out. Its a strict === to the actual tourny file contents.
    const file = 'Match: 01\r\nPerson A vs Person B\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\nMatch: 02\r\nPerson A vs Person C\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n0\r\n0\r\n0\r\n0\r\n\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n'


    //Display data over multiple matches
    describe('take guaranteed-valid file and display matchdata', () => {
        let getAllByRole: any;


        beforeEach(async () => {
            ({ getAllByRole } = render(<FileToMatchConverter contents={file} />))
        })

        //TODO::Need to check the data itself here, unsure of how to do that with jest & TetsingLibrary
        it("Converts text to match data and displays them,", () => {
            expect(getAllByRole('row').length).toBeGreaterThanOrEqual(2);

            //Make assert for Match ID

            //
        })
    })
})