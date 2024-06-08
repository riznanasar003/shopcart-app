import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewProduct = () => {
    const [news,changedData] = useState({
        "products":[]
    } )
    const fetchData = () =>{
        axios.get("https://dummyjson.com/products").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>

            <div className="container">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                     {news.products.map(
                        (value, index) =>{
                            return    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card">
                                <img src={value.images} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{value.reviewerName}</h5>
                                    <p class="card-text">{value.comment}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        }
                     )}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ViewProduct