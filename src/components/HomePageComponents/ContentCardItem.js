import React from "react";
import {Grid} from "@material-ui/core";

export default class ContentCardItem extends React.Component {

  state = {
    content: this.props.content,
  }
  render() {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <div className="card-deck wbdv-card-dim wbdv-cards-items wbdv-homepage-cards">
            <div className="card">
              <iframe
                      src={this.state.content.itemId} target="_parent" >
              </iframe>
            </div>
          </div>
        </Grid>
    )
  }
}
