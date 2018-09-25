import { API_KEY } from './http.api'
const baseUrl = `https://newsapi.org/v2/top-headlines?`;
const category = `&category=`;
const country = `country=`;

export default class HttpService {

    getNews(requestParameters, countryCode){
        console.log(baseUrl+country+countryCode+category+requestParameters);
        return fetch(baseUrl+country+countryCode+category+requestParameters,{
            headers: {
                "X-Api-Key": API_KEY,
            }
        })
        .then(response => response.json());

    }

    getNewsSearch(query, countryCode){
        return fetch(baseUrl+country+countryCode+'&q='+query,{
            headers: {
                "X-Api-Key": API_KEY,
            }
        })
        .then(response => response.json());

    }

}