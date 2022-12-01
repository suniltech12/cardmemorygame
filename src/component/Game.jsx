import React, { useEffect, useState } from "react"
import Img1 from "../images/image1.jpg"
import Img2 from "../images/image2.jpg"
import Img3 from "../images/image3.jpg"
import Img4 from "../images/image4.jpg"
import Img5 from "../images/image5.jpg"
import Img6 from "../images/image6.jpg"
import Img7 from "../images/image7.jpg"
import Img8 from "../images/image8.jpg"
import Img9 from "../images/image9.jpg"
import Img10 from "../images/image10.jpg"
import Img11 from "../images/image11.jpg"
import Img12 from "../images/image12.jpg"
import Img13 from "../images/image13.jpg"
import Img14 from "../images/image14.jpg"
import Img15 from "../images/image15.jpg"
import SingleComponent from "./SingleComponent"

const data1 = [
    {
        img: Img1,
        matched: false
    },
    {
        img: Img2,
        matched: false
    },
    {
        img: Img3,
        matched: false
    },
    {
        img: Img4,
        matched: false
    },
    {
        img: Img5,
        matched: false
    },
    {
        img: Img6,
        matched: false
    },
    {
        img: Img7,
        matched: false
    },
    {
        img: Img8,
        matched: false
    },
    {
        img: Img9,
        matched: false
    },
    {
        img: Img10,
        matched: false
    },
    {
        img: Img11,
        matched: false
    },
    {
        img: Img12,
        matched: false
    },
    {
        img: Img13,
        matched: false
    },
    {
        img: Img14,
        matched: false
    },
    {
        img: Img15,
        matched: false
    },
]

const Game = () => {
    const [card, setCards] = useState([])
    const [turn, setTurn] = useState(0)
    const [selectFirst, setSelectFirst] = useState(null)
    const [selectSecond, setSelectSecond] = useState(null)
    const [disable, setDisable] = useState(false)
    const [point, setPoint] = useState(0)
    const shuffleCard = () => {
        const sufleCard = [...data1, ...data1]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setSelectFirst(null)
        setSelectSecond(null)
        setCards(sufleCard)
        setPoint(0)
        setTurn(0)
    }
    const handleChoice = (card) => {
        selectFirst ? setSelectSecond(card) : setSelectFirst(card)
    }
    useEffect(() => {

        if (selectFirst && selectSecond) {
            setDisable(true)
            if (selectFirst.img === selectSecond.img) {
                setCards(prevCards => {
                    // eslint-disable-next-line array-callback-return
                    return prevCards.map((card) => {
                        if (card.img === selectFirst.img) {
                            setPoint(point + 1)
                            return {
                                ...card,
                                matched: true,
                            }

                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => {
                    resetTurn()
                }, 1000)

            }
        }
    }, [selectFirst, selectSecond])
    const resetTurn = () => {
        setSelectFirst(null)
        setSelectSecond(null)
        setTurn(prevTurn => prevTurn + 1)
        setDisable(false)
    }

    useEffect(() => {
        shuffleCard()
    }, [])

    return (
        <>
            <div className="mainDIv">
                <button onClick={shuffleCard}>New Game</button>
                <div className="card-grid">
                    {
                        card.map((card) => (
                            <SingleComponent
                                key={card.id}
                                card={card}
                                handleChoice={handleChoice}
                                flipped={card === selectFirst || card === selectSecond || card.matched}
                                disable={disable}
                            />
                        )
                        )
                    }
                    <div>
                        <p>Turn : {turn}</p>
                        <p>Point : {point}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game