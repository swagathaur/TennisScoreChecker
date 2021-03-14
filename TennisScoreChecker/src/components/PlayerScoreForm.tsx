import React from "react";

function PlayerScoreForm(props) {
    //Make minimal game list elements
    let gameSet: any[] = [];
    for (let i = 0; i < props.totalSets; i++) {
        gameSet.push(
            <td key={i}> {props.player.gameSets[i]} </td>)
    }

    return (
        <tr className={props.className} key={props.player.name}>
            <td key='name'> {props.player.name} </td>
            {gameSet}
            <td > {props.player.sets}</td>
        </tr>
    )
}

export default PlayerScoreForm;