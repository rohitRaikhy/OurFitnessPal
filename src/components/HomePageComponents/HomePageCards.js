import React from "react"
import HomePageCardItems from "./HomePageCardItems";
import "./Cards.css"

const HomePageCards = ({search}) => {

    let {label, image} = search.recipe

return(
    <div>
        <div className="wbdv-cards">
            <div className= "wbdv-cards-container">
                <div className= "wbdv-cards-wrapper">
                    <div className="wbdv-margin-cards">
                        <ul className="wbdv-margin-cards">
                            <HomePageCardItems
                                src = {image}
                            text = "Food"
                                label = {label}
                            path ="/services"
                            />
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </div>
)}

export default HomePageCards;
