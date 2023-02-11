import React, { Component } from 'react'
import './newsItem.css'

export class NewsItem extends Component {
  render() {
    let{title ,description, imageSource, viewUrl, date, author}=this.props;
    return (
      <div className='Card'>
        <img src={!imageSource? "https://tse1.mm.bing.net/th?id=OIP.hf7oNOMsDrPFgigE584-zgHaE8&pid=Api&P=0" : imageSource} alt=' 'className='CardImage'/>
        <div className='CardContent'>
            <h2 className='CardTitle'>{title}</h2>
            <p className='CardDesp'>{description}</p>
        </div>
        <p className='details'>By {!author?"Unknown" : author} on {date}</p>
        <a href={viewUrl} target="_blank"className='button' >View</a>
      </div>
    )
  }
}

export default NewsItem