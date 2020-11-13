import React from "react"
import HomePageCardItems from "./HomePageCardItems";
import "./Cards.css"

const HomePageCards = () =>
    <div>
        <div className="wbdv-cards">
            <h1>Check out these new recipes!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                <ul className= "cards-items">
                    <HomePageCardItems/>
                </ul>
                </div>
            </div>
        </div>
    </div>

export default HomePageCards;