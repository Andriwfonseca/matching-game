import PlayerArrow from "../../components/PlayerArrow";
import PlayerName from "../../components/PlayerName";
import PlayerVs from "../../components/PlayerVs";
import "./style.css";

const ScoreBoard = () =>{
    return /*html*/`

        <header class="score-board">           
           
            ${PlayerName("Player 1")}
            ${PlayerVs()}
            ${PlayerName("Player 2")}
            
        </header>
    `;
}

export default ScoreBoard;