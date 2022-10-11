import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiUser3Line } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

    const getdata = useSelector(state => state.cartReducer.carts)

    // window.addEventListener('scroll', () => {
    //     const navbar = this.document.querySelector('.Navbar')
    //     navbar.classList.toggle('active', this.window.screenY > 100)
    // })

    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Link className='logo' to='/'>SCHEMA </Link>
                        </div>
                        <div className="col-lg-9 myNav">
                            <ul>
                                <li className='ms-5'><Link to='/'>HOME</Link></li>
                                <li><Link to='/'>SHOP</Link></li>
                                <li><Link to='/'>ABOUT US</Link></li>
                                <li><Link to='/'>BLOG</Link></li>
                                <li><Link to='/'>CONTACT US</Link></li>
                            </ul>


                            <div className="right">
                                <Link to='/user'><RiUser3Line /></Link>
                                <Link to='/wishlist'><AiOutlineHeart /></Link>
                                <Link to='/cart' className="bag">
                                    <BsBagCheck />
                                    MY CART ({getdata.length})
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar