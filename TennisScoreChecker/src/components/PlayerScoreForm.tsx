import React from "react";

function PlayerScoreForm(props) {
    //Make minimal game list elements
    let gameSet: any[] = [];
    for (let i = 0; i < props.totalSets; i++) {
        if (props.player.gameSets[i] == 6) {
            gameSet.push(
                <td key={i} style={{ backgroundColor: "darkseagreen" }}>
                    {props.player.gameSets[i]}
                </td>)
        }
        else {
            gameSet.push(
                <td key={i} style={{ backgroundColor: "tan" }}>
                    {props.player.gameSets[i]}
                </td>)
        }
    }
    let setDisplay;
    if (props.player.sets === 2)
        setDisplay = <td style={{ backgroundColor: "seagreen" }}> {props.player.sets} </td>
    else
        setDisplay = <td style={{ backgroundColor: "sandybrown" }}> {props.player.sets} </td>

    return (
        <tr className={props.className} key={props.player.name}>
            <td key='name'> {props.player.name} </td>
            {gameSet}
            {setDisplay}
        </tr>
    )
}

export default PlayerScoreForm;