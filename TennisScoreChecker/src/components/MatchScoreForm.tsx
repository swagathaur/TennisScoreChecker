import React from "react";
import PlayerScoreForm from "./PlayerScoreForm";

function MatchScoreForm(props) {
    return (
        <table>
            <tbody>
                <PlayerScoreForm
                    player={props.playerX}
                    totalSets={props.totalSets}
                    className={props.winner === props.playerX ? 'winnerTable' : 'loserTable'} />
                <PlayerScoreForm
                    player={props.playerY}
                    totalSets={props.totalSets}
                    className={props.winner === props.playerY ? 'winnerTable' : 'loserTable'} />
            </tbody>
        </table>
    )
}

export default MatchScoreForm;