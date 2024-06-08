import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data, changeData] = useState(
        {"articles":[]}

    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response) => {
                console.log(response.data)
                changeData(response.data)

            }

        ).catch().finally()

    }
    useEffect(() =>{fetchData()},[])



return (

    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                      {data.articles.map(
                        (value,index) =>{
                            return   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="card">
                                <img src={value.urlToImage}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.status}</h5>
                                    <p class="card-text">{value.totalResults}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>

                        </div>
                        }
                      )
                      }

                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ViewAll