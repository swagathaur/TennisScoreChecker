import React from "react";

function PlayerScoreForm(props) {
    //Make minimal game list elements
    let gameSet: any[] = [];
    for (let i = 0; i < props.totalSets; i++) {
        if (props.player.gameSets[i] == 6) {
            gameSet.push(
                <td key={i} style={{ backgroundColor: "greenyellow" }}>
                    {props.player.gameSets[i]}
                </td>)
        }
        else {
            gameSet.push(
                <td key={i} style={{ backgroundColor: "papayawhip" }}>
                    {props.player.gameSets[i]}
                </td>)
        }
    }
    let setDisplay;
    if (props.player.sets === 2)
        setDisplay = <td> {props.player.sets} </td>
    else
        setDisplay = <td > {props.player.sets} </td>

    return (
        <tr className={props.className} key={props.player.name}>
            <td key='name'> {props.player.name} </td>
            {gameSet}
            {setDisplay}
        </tr>
    )
}

export default PlayerScoreForm;