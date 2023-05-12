import React, { useState, useEffect } from 'react'
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [details, setDetails] = useState({})
    const [profileImage, setProfileImage] = useState()
    const [productdata,setProductData] = useState([])

    let navigate = useNavigate();
    useEffect(() => {
        var token = localStorage.getItem("LoginId")
        console.log(token);
        if (!token) {
            navigate('/login')
        }
        axios.post('http://localhost:3001/api/admin/add-product', {
            headers: {
                'Authorization': `Bearer ` + token
            }
        })
    } , [])


    const detailsChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }
    console.log(details);

    const formSubmit = (e) => {
        e.preventDefault()
        if (profileImage) {
            const data = new FormData()
            const filename = profileImage.name
            data.append("name", filename)
            data.append("file", profileImage)
            axios.post('http://localhost:3001/api/admin/upload', data).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err);
            })
        }
        var token = localStorage.getItem("LoginId")
        axios.post('http://localhost:3001/api/admin/add-product', details, {
            headers: {
                'Authorization': `Bearer ` + token
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <div>
            <div className="container addProductContainer">
                <div className="row">
                    <div className="col p-5 mt-5 d-flex justify-content-center">
                        <form className='form' onSubmit={formSubmit} encType="multipart/formdata">
                            <div className="mb-3">
                                <label htmlFor="Product Name" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="title" onChange={detailsChange} name="productName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Description" className="form-label">Product Category</label>
                                <input type="text" className="form-control" id="Description" onChange={detailsChange} name="productDetails" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productimage" className="form-label">Product Image</label>
                                <input type="file" className="form-control" id="productimage" onChange={(e) => { setProfileImage(e.target.files[0]); setDetails({ ...details, profileImg: e.target.files[0].name }) }} name="profileImg" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Price" className="form-label">Price</label>
                                <input type="text" className="form-control" id="Price" onChange={detailsChange} name="productPrice" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Total Stock</label>
                                <input type="text" className="form-control" id="stock" onChange={detailsChange} name="totalStocks" />
                            </div>
                            <button type="submit" className="btn btn-primary mx-5">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
