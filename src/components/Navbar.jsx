import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link className='logo' to='/'>SCHEMA</Link>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/'><BiSearch /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar