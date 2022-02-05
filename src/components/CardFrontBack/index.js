import CardGame from "../CardGame";
import "./style.css";

const CardFrontBack = () =>{
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-javascript", "Logo do JavaScript")}    
        </article>
    `;
}

export default CardFrontBack;