import React from 'react'
import './Navbar.css'
function Navbar() {

  function sessionOut(){
    localStorage.clear()
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg fw-bolder">
        <div className="container-fluid" >
          <a className="navbar-brand" href="#" style={{color:'white'}}>Ekart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active"style={{color:'white'}} href="/add">Add Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} href="/cart">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} href="/login" onClick={sessionOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
