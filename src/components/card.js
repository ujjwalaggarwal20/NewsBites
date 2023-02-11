import React, { Component } from 'react'

export class Card extends Component {
  render() {
    let{title ,description, imageSource, viewUrl}=this.props;
    return (
      <div>
        <div>
            <img src={imageSource} alt=' '/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <button href={viewUrl}>View</button>
      </div>
    )
  }
}

export default Card