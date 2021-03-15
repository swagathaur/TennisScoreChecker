import React from "react";

function PlayerScoreForm(props) {
    //Make minimal game list elements
    let setCounts: any[] = [];
    for (let i = 0; i < props.totalSets; i++) {
        if (props.player.wonGameCounts[i] === 6) {
            setCounts.push(
                <td key={i} style={{ backgroundColor: "darkseagreen" }}>
                    {props.player.wonGameCounts[i]}
                </td>)
        }
        else {
            setCounts.push(
                <td key={i} style={{ backgroundColor: "tan" }}>
                    {props.player.wonGameCounts[i]}
                </td>)
        }
    }
    let setDisplay;
    if (props.player.sets === 2)
        setDisplay = <td style={{ backgroundColor: "seagreen" }}> {props.player.takenSets} </td>
    else
        setDisplay = <td style={{ backgroundColor: "sandybrown" }}> {props.player.takenSets} </td>

    return (
        <tr className={props.className} key={props.player.name}>
            <td key='name'> {props.player.name} </td>
            {setCounts}
            {setDisplay}
        </tr>
    )
}

export default PlayerScoreForm;