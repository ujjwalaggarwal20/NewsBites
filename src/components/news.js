import React, { Component } from "react";
import NewsItem from "./newsItem";
import "./news.css";
import PropTypes from "prop-types";
import { getDefaultNormalizer } from "@testing-library/react";

export class News extends Component {
  static defautProps = {
    country: "in",
    pageSize: 8,
    category: getDefaultNormalizer,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  
  async componentDidMount() {
    console.log(this.props.category);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=003089780bfe4cae8a878e84b91a9526&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log("Category: ", this.props.category);
  }

  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=003089780bfe4cae8a878e84b91a9526&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=003089780bfe4cae8a878e84b91a9526&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(data);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="news">
        <h1 className="tophead">Top Headlines</h1>
        <div className="cardGrid">
          {this.state.articles.map((element) => {
            return (
              <div className="card" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageSource={element.urlToImage}
                  viewUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="page">
          <button
            disabled={this.state.page <= 1}
            className="button"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button className="button" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
