import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import { data } from '../backend';
import { useSelector, useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action';

const TopProducts = () => {

    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(ADD(item))
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

                        {data.map((item, index) => (

                            <div key={index} className="col-lg-4">
                                <div className="cards">
                                    <div className="cardsHeader">
                                        <img src={item.image} className='w-100' alt={item.title} />
                                        <div className="btnWrap">
                                            <div onClick={() => addToCart(item)} className="shop"><FiShoppingBag /></div>
                                            <div className="heart"><AiOutlineHeart /></div>
                                            <div href={item.image} data-fancybox="elastic" className="search"><FiSearch /></div>
                                        </div>
                                    </div>
                                    <Link to='/product' className="cardsBody">
                                        <h5>{item.title}</h5>
                                        <h6>Price: {item.price} sum</h6>
                                        <p>By {item.creator}</p>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="blue"></div>
                <div className="blurLeft"></div>
            </div>

        </>
    )
}

export default TopProducts