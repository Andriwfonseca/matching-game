import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import PlayerVs from "../../components/PlayerVs";
import "./style.css";

const ScoreBoard = () =>{
    return /*html*/`

        <header class="score-board">           
           
            ${PlayerName("Player 1")}
            ${PlayerScore(1)}
            ${PlayerVs()}
            ${PlayerScore(0)}
            ${PlayerName("Player 2")}            
            
        </header>
    `;
}

export default ScoreBoard;