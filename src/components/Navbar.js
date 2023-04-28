import React from 'react' 

const Navbar = ({ brand }) => {
    return (
    <nav className="navbar navbar-white bg-dark">
      <div>
        <a className="navbar-brand text-uppercase" href="/">{brand}</a>
      </div>
    </nav>
    )
}

export default Navbar