import React from "react";
import PlayerScoreForm from "./PlayerScoreForm";
import styles from '../assets/tableStylings.module.css';

function MatchScoreForm(props) {
    return (
        <div>
            <h1>Match {props.id} </h1>
            <table className={props.winner === props.playerX ? styles.winnerTable : styles.loserTable} >
                <tbody>
                    <PlayerScoreForm
                        player={props.playerX}
                        totalSets={props.totalSets} />
                    <PlayerScoreForm
                        player={props.playerY}
                        totalSets={props.totalSets} />
                </tbody>
            </table>
        </div>
    )
}

export default MatchScoreForm;