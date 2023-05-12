import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./ProductDisplay.css"

function ProductDisplay() {
    const [productlist, setProductList] = useState([])
    const [values, setValues] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        var token = localStorage.getItem("LoginId")
        console.log(token);
        if (!token) {
            navigate('/login')
        }
        axios.get('http://localhost:3001/api/admin/product-view', {
            headers: {
                'Authorization': `Bearer ` + token
            }
        }).then((res) => {
            console.log(res.data)
            setProductList(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    var token = localStorage.getItem("LoginId")
    const handleClick = (id) => {
        if (id) {
            axios.post('http://localhost:3001/api/admin/add-cart/', { id }, {
                headers: {
                    'Authorization': `Bearer ` + token
                }
            }).then((res) => {
                console.log(res)
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("error");
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row mt-5" >
                    {productlist.map((value) =>
                        <div className="col">
                            <div className="card" style={{ width: '15vw',height:'25vw'}}>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src={`/images/${value.profileImg}`} style={{ width: '15vw',height:'12vw' }} className="img-fluid" />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                    </a>
                                </div>
                                <div className="card-body " style={{color:'InfoText'}}>
                                    <h5 className="card-title">Product:{value.productName}</h5>
                                    <p className="card-text">Category:{value.productDetails}</p>
                                    <p className="card-text">Price:{value.productPrice}</p>
                                    <p className="card-text fw-bolder" >Available Stocks:({value.totalStocks})</p>
                                    <a href="#!" className="btn btn-primary" onClick={() => { handleClick(value._id) }} >Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
