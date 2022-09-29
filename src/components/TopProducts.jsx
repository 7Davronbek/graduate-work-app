import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const TopProducts = () => {
    return (
        <div className='TopProducts'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Top Products</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, minus!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="cards">
                                    <div className="cardsHeader">
                                        <img src="/images/1.png" className='w-100' alt="" />
                                        <div className="btnWrap">
                                            <div className="shop"><FiShoppingBag /></div>
                                            <div className="heart"><AiOutlineHeart /></div>
                                            <div className="search"><FiSearch /></div>
                                        </div>
                                    </div>
                                    <Link to='/product' className="cardsBody">
                                        <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                        <h6>120.000 sum</h6>
                                        <p>By Abdushkurov Shavkat</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts