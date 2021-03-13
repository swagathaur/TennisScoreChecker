import React from "react";

function TennisScoreForm(props) {
    return (
        <div>
            <PlayerScoreForm 
                player={props.playerX}
                totalSets={props.totalSets}
                class={props.winner === props.playerX ? 'winnerTable' : 'loserTable'} />
            <PlayerScoreForm 
                player={props.playerY}
                totalSets={props.totalSets}
                class={props.winner === props.playerY ? 'winnerTable' : 'loserTable'} />
        </div>
    )
}

export default TennisScoreForm;