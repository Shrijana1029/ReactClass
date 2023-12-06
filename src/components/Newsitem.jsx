import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Newsitem extends Component {
  
  render() 
  {
    let {title,description,imgUrl,newsUrl} = this.props; 
    return (
      <>
        <div className="card mx-2 my-5" style={{  height:"23rem", width: "18rem"  }}>
          <img src={imgUrl}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="blank"className="btn btn-success btn-sm">
             Explore
            </a>
          </div>
        </div>
      </>
    );
  }
}
