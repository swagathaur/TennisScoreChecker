import React from "react";
import PlayerScoreForm from "./PlayerScoreForm";
import styles from '../assets/tableStylings.module.css';

function MatchScoreForm(props) {
    let sets = [];
    for (let i = 0; i < props.totalSets; i++) {
        sets.push(<th key = {i}>Set {i + 1}</th>)
    }

    return (
        <div>
            <h1>Match {props.id} </h1>
            <table className={styles.steelBlueCols} >
                <thead>
                    <tr>
                        <th key='PlayerHeader'> Players </th>
                        {sets}
                        <th key='MatchHeader'> Match</th>
                    </tr>
                </thead>
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