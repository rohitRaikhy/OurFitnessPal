import React from "react"
import "./HomePageBody.Style.css"
import HomePageCards from "./HomePageCards";

const HomePageBody = () =>
    <div>
        <div>
    <div className="wbdv-homepage-container">
        <div className="container">
       <div className="wbdv-homepage-buttons">
           <h1 className="wbdv-heading-body">Healthy Living Starts With What We Eat!</h1>
           <p className="wbdv-heading-paragraph">
               Take control of your goals. Track calories, break down ingredients,
               and log activities with OurFitnessPal.
           </p>
           {/*//TODO: Link this to the register page*/}
           <button
               className="btn btn-primary btn btn-outline-light wbdv-btn-mobile">
               Get Started
           </button>

           {/*I NEED TO CHANGE THIS TO LINK LATER*/}
           <span className="pull-left">
               <h5>Already have an account?</h5>
          <a href="#">
              <h3>Login</h3>
          </a>
           </span>
       </div>
        </div>
    </div>
        </div>
<HomePageCards/>
    </div>


export default HomePageBody;

