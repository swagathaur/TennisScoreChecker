import React from "react";

function PlayerScoreForm(props) {
    //Make minimal game list elements
    let gameSet: any[] = [];
    for (let i = 0; i < props.totalSets; i++) {
        gameSet.push(
            <td key={i} 
                name='gamesCount'
                player={props.player.name}>
                {props.player.gameSets[i]}
            </td>)
    }

    return (
        <tr className={props.class} key={props.player.name}>
            <td name={props.player.name} key='name'>
                {props.player.name}
            </td>
            {gameSet}
            <td name='gamesCount'
                player={props.player.name}>
                    {props.player.sets}
            </td>
        </tr>
    )
}

export default PlayerScoreForm;