import React from "react"
import {Link} from "react-router-dom"


class searchBar extends React.Component{

    render() {
        return (
            <div>
                <h2>Search from over millions of types of foods from our database.</h2>
                <div className="input-group">
                    <input className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default searchBar;
