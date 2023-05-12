import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Register.css'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Register() {

    const [open, setOpen] = React.useState(false);

    let navigate = useNavigate();
    const [state, setState] = useState({})
    const signupValues = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(state);
        axios.post('http://localhost:3001/api/admin/register', state).then((result) => {
            console.log(result);
            if (result) {
                navigate("/login"); 
            }
            else {
                navigate("/register");
            }
        }).catch((err) => {
            console.log((err));
        })
    }


    return (
        <div>
     
            <div className="container registerContainer .bg-secondary.bg-gradient ">
                <div className="row ">
                    <div className="col col p-5 mt-5 d-flex justify-content-center">
                        <form className='form' onSubmit={submitForm} encType="multipart/formdata">
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="Name" aria-describedby="Name" onChange={signupValues} name="fullName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Mobile" className="form-label">Mobile</label>
                                <input type="text" className="form-control" id="Mobile" onChange={signupValues} name="mobileNumber" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password</label>
                                <input type="Password" className="form-control" id="Password" onChange={signupValues} name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary mx-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
