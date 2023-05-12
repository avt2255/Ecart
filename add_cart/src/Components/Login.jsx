import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
function Login() {

    let navigate = useNavigate();
    const [state, setState] = useState({})
    const inputValues = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })

    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(state);
        axios.post('http://localhost:3001/api/admin/login', state).then((result) => {
            console.log(result.data);
            localStorage.setItem("LoginId", result.data.token)
            if (result) {
                navigate('/add')
            } else {
                navigate('/login')
            }
        }).catch((err) => {
            console.log(err);
            console.log("error occured");
        })
    }

    return (
        <div>
            <div className="container loginContainer">
                <div className="row ">
                    <div className="col p-5 mt-5 d-flex justify-content-center">
                        <form className='form' onSubmit={submitForm} encType="multipart/formdata">
                            <div className="mb-3">
                                <label htmlFor="Mobile" className="form-label">Mobile</label>
                                <input type="text" className="form-control" id="Mobile" onChange={inputValues} name="mobileNumber" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password</label>
                                <input type="Password" className="form-control" id="Password" onChange={inputValues} name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary mx-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
