import React from 'react'
import './news.css'

const News = (props) =>{
    const newsList = props.defaultValue;
    let news;
    console.log(newsList);
    if(newsList != null){
        news = newsList.articles.map(item =>
                                            <div className="news__card">
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

    return(
        <div className="news news--tablet news--mobile">
            {news}
        </div>
    )
    
}

export default News
