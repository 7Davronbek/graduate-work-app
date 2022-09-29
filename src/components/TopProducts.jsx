import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

const TopProducts = () => {
    
    const [value, setValue] = useState('')
    
    const onChange = e => {
        setValue(e.target.value)
    }

    const onSearch = key => {
        setValue(key)
    }

    return (
        <>
            <div className='TopProducts'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Top Products</h1>
                            <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, minus!</p>
                        </div>
                    </div>

                    <div className="row">
                        {/* <div className="col-lg-12 mx-auto"> */}
                        {/* <div className="row"> */}
                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/1.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/1.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/2.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/2.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/3.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/3.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/4.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/4.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/7.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/7.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src="/images/6.png" className='w-100' alt="" />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
                                        <div className="heart"><AiOutlineHeart /></div>
                                        <div href='/images/6.png' data-fancybox="elastic" className="search"><FiSearch /></div>
                                    </div>
                                </div>
                                <Link to='/product' className="cardsBody">
                                    <h5>Lorem ipsum dolor sit amet consectetur  elit.</h5>
                                    <h6>Price: 120.000 sum</h6>
                                    <p>By Abdushkurov Shavkat</p>
                                </Link>
                            </div>
                        </div>

                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className="blue"></div>
                <div className="blurLeft"></div>
            </div>

        </>
    )
}

export default TopProducts