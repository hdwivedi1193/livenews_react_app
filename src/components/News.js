import React, { Component } from 'react'
import loading from "../assets/loading.gif"
export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            pageno: 1,
            pageSize: 8

        }
    }



    async componentDidMount() {
        this.setState({
            loading: true,
        })
        let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6a3d4949a08f4f03bc5a2b9da951c955&page=${this.state.pageno}&pageSize=${this.state.pageSize}`)
        let response = await newsData.json();
       
        let articles = response.articles;
        this.setState({
            articles: articles,
            loading: false,
            pageno: this.state.pageno,
            pageSize: this.state.pageSize,
            totalResults: response.totalResults


        })
    }

    onClickNext = async () => {
        this.setState({
            loading: true,
        })
        let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6a3d4949a08f4f03bc5a2b9da951c955&page=${this.state.pageno + 1}&pageSize=${this.state.pageSize}`)
        
        let response = await newsData.json();
        let articles = response.articles;
        this.setState({
            articles: articles,
            loading: false,
            pageno: this.state.pageno + 1,
            pageSize: this.state.pageSize + 1,
            totalResults: response.totalResults

        })
    }

    onClickPrevious = async () => {
        this.setState({
            loading: true,
        })
        let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6a3d4949a08f4f03bc5a2b9da951c955&page=${this.state.pageno - 1}&pageSize=${this.state.pageSize}`)
        
        let response = await newsData.json();
        let articles = response.articles;
        this.setState({
            articles: articles,
            loading: false,
            pageno: this.state.pageno - 1,
            pageSize: this.state.pageSize - 1,
            totalResults: response.totalResults

        })
    }
    render() {
        return (
            <>
            <div className='text-center'><img src={this.state.loading?loading:""}></img></div>
            <div className="row">
                
                {
                    this.state.articles.map(function (elements) {
                        return <div className="col-sm" style={{ padding: "18px" }} >
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={elements.urlToImage ? elements.urlToImage : `https://seotest.guwahatiplus.com/public/web/images/default-news.png`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a href={elements.url} target='_blank'><p className="card-text">{elements.title}</p></a>
                                </div>
                            </div>
                        </div>


                    })
                }
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${this.state.pageno <= 1 ? `disabled` : ""} `} >
                            <a className="page-link" onClick={this.onClickPrevious} >Previous</a>
                        </li>
                        <li className={`page-item ${this.state.totalResults / (this.state.pageSize * this.state.pageno) < 1 ? `disabled` : ""}`} >
                            <a className="page-link" onClick={this.onClickNext}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}
