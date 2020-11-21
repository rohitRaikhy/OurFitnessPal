import React from "react"
import {Link, NavLink} from 'react-router-dom'
import {Grid} from "@material-ui/core";
import "./HomePageBody.Style.css"
import "./cards-search.css"
import "./Cards.css"

const HomePageCardItems = ({search}) => {
//     const HomePageCardItems = (props) => {

    // const {label, image} = search.recipe
    {console.log(search)}
    // let randomSearch = search[1]
    let {label, image} = search.recipe
    // let {label, image} = randomSearch.recipe

    return(
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <div className="card-deck wbdv-card-dim wbdv-cards-items wbdv-homepage-cards">
            <div className="card">
                <img src={image}
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <p className="card-text">Test</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            {/*<div className="card">*/}
            {/*    <img src="https://www.heart.org/-/media/images/news/2019/april-2019/0429sustainablefoodsystem_sc.jpg" className="card-img-top" alt="..."/>*/}
            {/*        <div className="card-body">*/}
            {/*            <h5 className="card-title">Card title</h5>*/}
            {/*            <p className="card-text">This card has supporting text below as a natural lead-in to additional*/}
            {/*                content.</p>*/}
            {/*        </div>*/}
            {/*        <div className="card-footer">*/}
            {/*            <small className="text-muted">Last updated 3 mins ago</small>*/}
            {/*        </div>*/}
            {/*</div>*/}
            {/*<div className="card">*/}
            {/*    <img src="https://www.heart.org/-/media/images/news/2019/april-2019/0429sustainablefoodsystem_sc.jpg" className="card-img-top" alt="..."/>*/}
            {/*        <div className="card-body">*/}
            {/*            <h5 className="card-title">Card title</h5>*/}
            {/*            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to*/}
            {/*                additional content. This card has even longer content than the first to show that equal height*/}
            {/*                action.</p>*/}
            {/*        </div>*/}
            {/*        <div className="card-footer">*/}
            {/*            <small className="text-muted">Last updated 3 mins ago</small>*/}
            {/*        </div>*/}
            {/*</div>*/}
        </div>
    </Grid>
    )}




export default HomePageCardItems;



// <div>
//     <li className="wbdv-cards-items">
//     <div className="card wbdv-homepage-cards">
//         <img src="https://fitnesstogether.com/files/home/corp/migrate/healthylunch_article.jpg" className="wbdv-cards-item-img" alt="..."/>
//             <div className="card-body">
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                     card's content.</p>
//             </div>
//     </div>
//     </li>
// </div>

{/*<div className="card wbdv-homepage-cards">*/}
{/*    <img src="https://fitnesstogether.com/files/home/corp/migrate/healthylunch_article.jpg" className="card-img-top" alt="..."/>*/}
{/*    <div className="card-body">*/}
{/*        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the*/}
{/*            card's content.</p>*/}
{/*    </div>*/}
{/*</div>*/}

