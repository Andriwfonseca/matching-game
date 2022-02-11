import './style.css';

const PlayerVs = (content = "vs") => {
    return /*html*/`
        <span class="player-vs">${content}</span>
    `;
}

export default PlayerVs;