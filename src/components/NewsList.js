import React from 'react'
import News from './News'

export default function NewsList(props) {

    return (
        <>
            <div className="container" style={{ "marginTop": "40px" }}>
                <h1 style={{'textAlign':"center",marginTop:"100px"}}>Latest News</h1>
                <News category={props.category} progress={props.progress}></News>
            </div>


        </>

    )

}
