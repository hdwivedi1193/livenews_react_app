import React, { useEffect, useState } from 'react'
import loading from "../assets/loading.gif"
export  default function News(props) {
    
    const [state,setMyState]=useState({
        articles: [],
        pageno: 1,
        pageSize: 8

    });

    const [setLoading,setMyLoading]=useState({
        loading:true
    })
    

    useEffect(  () => {
        updateNews();
       },[]);

    const updateNews=async()=>{
        setMyLoading({
            loading: true,
        })
        let newsData =  await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_News_API_KEY}&page=${state.pageno}&pageSize=${state.pageSize}`)
        let response =  await newsData.json();
        let articles = response.articles;
        setMyLoading({
            loading: false,
        })
        setMyState({
            articles: articles,
            pageno: state.pageno,
            pageSize: state.pageSize,
            totalResults: response.totalResults
        })
    }
    


    
        
    

    const onClickNext=async()=> {
        setMyLoading({
            loading: true,
        })
        let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_News_API_KEY}&page=${state.pageno + 1}&pageSize=${state.pageSize}`)
        
        let response = await newsData.json();
        let articles = response.articles;
        setMyLoading({
            loading: false,
        })
        setMyState({
            articles: articles,
            pageno: state.pageno + 1,
            pageSize: state.pageSize,
            totalResults: response.totalResults

        })
    }

    const onClickPrevious=async()=> {
        setMyLoading({
            loading: true,
        })
        let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_News_API_KEY}&page=${state.pageno - 1}&pageSize=${state.pageSize}`)
        
        let response = await newsData.json();
        let articles = response.articles;
        setMyLoading({
            loading: false,
        })
        setMyState({
            articles: articles,
            pageno: state.pageno - 1,
            pageSize: state.pageSize,
            totalResults: response.totalResults

        })
    }
        return (
            <>
            <div className='text-center'><img src={setLoading.loading?loading:""}></img></div>
            <div className="row">
                
                {
                  state.articles.map(function (elements) {
                        return <div className="col-sm" key={elements.url} style={{ padding: "18px" }} >
                            <div className="card" style={{ width: "18rem","margin": "0 auto" }}>
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
                        <li className={`page-item ${state.pageno <= 1 ? `disabled` : ""} `} >
                            <a className="page-link" onClick={()=>onClickPrevious()} >Previous</a>
                        </li>
                        <li className={`page-item ${state.totalResults / (state.pageSize * state.pageno) < 1 ? `disabled` : ""}`} >
                            <a className="page-link" onClick={()=>onClickNext()}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </>
        )
    
}
