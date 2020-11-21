import React from "react"
import HomePageCardItems from "./HomePageCardItems";
import "./Cards.css"

const HomePageCards = ({search}) => {

    let {label, image} = search.recipe

return(
    <div>
        {/*<div className="wbdv-cards">*/}
        {/*    <div className="cards-container">*/}
        {/*        <div className="cards-wrapper">*/}
        {/*        <ul className= "cards-items">*/}
        {/*            <HomePageCardItems/>*/}
        {/*        </ul>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="wbdv-cards">
            <div className= "wbdv-cards-container">
                <div className= "wbdv-cards-wrapper">
                    <div className="wbdv-margin-cards">
                        <ul className="wbdv-margin-cards">
                            <HomePageCardItems
                            // src = "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg"
                                src = {image}
                            text = "Food"
                            // label = "Test"
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
