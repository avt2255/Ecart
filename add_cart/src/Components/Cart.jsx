
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [productlist, setProductList] = useState([])
    let navigate = useNavigate();

    var token = localStorage.getItem("LoginId")
    useEffect(() => {

        console.log(token);
        if (!token) {
            navigate('/login')
        }
        axios.get('http://localhost:3001/api/admin/cart-view', {
            headers: {
                'Authorization': `Bearer ` + token
            }
        }).then((res) => {
            console.log(res.data.data)
            setProductList(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleClick = (id, productName) => {
        console.log(id);
        if (id) {
            axios.post('http://localhost:3001/api/admin/cart-delete/', { id, productName }, {
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
                <div className="row mt-5">
                    {productlist.map((value) =>
                        <div className="col d-flex justify-content-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Product : {value.productName}</h5>
                                    <p className="card-text">Price : {value.productPrice}</p>
                                    <p className="card-text">Category : {value.productDetails}</p>
                                    <a href="#" className="btn btn-primary" onClick={() => { handleClick(value._id, value.productName) }}>Remove</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
