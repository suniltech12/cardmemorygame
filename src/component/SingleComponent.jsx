import React from "react"
import "./SingleCard.css"


const SingleComponent = ({ card, handleChoice, flipped,disable }) => {
    const handlClick = () => {
        if(!disable){
            handleChoice(card)
        }
        
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.img} alt="card front" />
                <img
                    className="back"
                    src="/img/qq.jpg"
                    alt="card front"
                    onClick={handlClick}
                />
            </div>
        </div>
    )
}

export default SingleComponent