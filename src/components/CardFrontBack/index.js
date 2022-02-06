import CardGame from "../CardGame";
import "./style.css";



const CardFrontBack = () =>{    
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        /*
        if($cardFrontBack.classList.contains('-active')){
            $cardFrontBack.classList.remove('-active');
        }else{
            $cardFrontBack.classList.add('-active');
        }*/
        /*toggle faz o mesmo que esse código acima*/
        $cardFrontBack.classList.toggle('-active');
    }

    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>    
            <div class="card -back">
                ${CardGame("logo-javascript", "Logo do JavaScript")}    
            </div>
        </article>
    `;
}

export default CardFrontBack;