import React from 'react'
import './news.css'

const News = (props) =>{
    const newsList = props.defaultValue;
    let news;
    if(newsList != null){
        if(newsList.articles.length === 0){
            news = <div style={{width: '100%', padding: '20px'}}> <h1 style={{fontWeight: '300', textAlign: 'center'}}>No News matching your query </h1> <div style={{fontSize: '100px', width: '100px', margin: '0 auto'}}>😰</div> </div>;
        }else{
            news = newsList.articles.map(
                item =>
                    <div className="news__card fade-in-up">
                        <div className="news__img">
                            <img src={item.urlToImage ? item.urlToImage : "http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg"}/>
                        </div>
                        <div className="news__info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank">Read More</a>
                        </div>
                    </div>
                                    
            )
        }
    }
    

    return(
        <div className="news news--tablet news--mobile">
            {news}
        </div>
    )
    
}

export default News
