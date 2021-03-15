import React from 'react'
import { MatchData } from "../types/MatchData"
import MatchScoreForm from "../components/MatchScoreForm"
import { PlayerData } from '../types/PlayerData';

function FileToMatchConverter(props) {
    let conversionOutcome = ConvertTextfileToMatchdata(props.contents);

    if (typeof conversionOutcome == 'string')
        return (<h3>{conversionOutcome}</h3>)

    const matchList = conversionOutcome.map((matchData) => {
       return <MatchScoreForm playerX={matchData.playerX}
            playerY={matchData.playerY}
            winner={matchData.winner}
            totalSets={matchData.totalSets}
            id={matchData.id}
            key={matchData.id}
        />;
    });
    return (<ul data-testid='matchList'> {matchList} </ul>);
}

export default FileToMatchConverter;

//Just to be aware, this is kinda funky because im using string to return error message.  Its bad for typescript.
//This is purely for time, this should only return MatchData and pass exceptions or something through in a different way.
export function ConvertTextfileToMatchdata(contents: string) {
    let matchData: MatchData[] = [];

    //Seperate string at each 'Match' keyword
    const matchSubStrings = contents.split(/[Mm]atch/);

    matchSubStrings.forEach(subString => {
        if (!isNullOrWhitespace(subString))
            try {
                matchData.push(GetBasicMatchInfo(subString));
            } catch (error) {
                return "Recieved error while trying to parse file."
            }
    });

    if (matchData.length === 0)
        return "No tennis matches were found in this text file.";

    return matchData;
}

//Extracts all individual number groups from a string
function ExtractNumbers(source: string) {
    let pattern = /[0-9]+/;
    let finds = source.match(pattern);
    return finds;
}

//Extracts strings that sit on either side of a " VS " string
function ExtractNames(source: string) {
    let pattern = / [Vv][Ss] /;
    return source.split(pattern);
}

//Returns true if a given string is empty of any non-whitespace characters
function isNullOrWhitespace(input) {
    return !input || !input.trim();
}

//Returns an empty matchData that has the playernames and ID attached.
function GetBasicMatchInfo(source: string) {
    //Seperate source into individual lines
    let lines = source.split('\n');

    //Get the ID from the first line
    let ids = ExtractNumbers(lines.shift());
    let id = 'unknownID';
    if (ids.length > 1)
        console.log("Too many IDs found for match, using id = unknownID")
    else if (ids.length === 0)
        console.log("No IDs found for match, using id = unknownID")
    else
        id = ids[0];

    //Find player names
    let names = ExtractNames(lines.shift());
    if (names.length !== 2) {
        console.log("Could not find two player names, defaulting to P1 and P2");
        names = ['P1', 'P2'];
    }

    let P1 = new PlayerData(names[0]);
    let P2 = new PlayerData(names[1]);

    //Start iterating through lines and handing out points
    let p1Count = 0;
    let p2Count = 0;
    let setIterator = 0;

    while (lines.length !== 0) {
        let line = lines.shift();
        if (isNullOrWhitespace(line))
            continue;
        let numbers = ExtractNumbers(line);

        //Disregard invalid lines (whitespace mostly)
        if (!numbers)
            continue;

        //Assign point based on pulled number
        if (numbers[0] === '0')
            p1Count++;
        else if (numbers[0] === '1')
            p2Count++;

        //Check if a player should have taken the set
        if (Math.max(p1Count, p2Count) >= 4 && Math.abs(p1Count - p2Count) >= 2) {
            //Get player with highest point count
            let winningPlayer = p1Count > p2Count ? P1 : P2;

            //Reset point count
            p1Count = 0;
            p2Count = 0;

            //Assign set
            winningPlayer.wonGameCounts[setIterator]++;

            //Check if set over
            if (winningPlayer.wonGameCounts[setIterator] >= 6)
                setIterator++;
        }
    }


    return new MatchData(id, P1, P2)
}

