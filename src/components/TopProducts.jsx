import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'

const TopProducts = () => {
  return (
    <div className='TopProducts'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Top Products</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, minus!</p>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/1.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/2.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/3.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/4.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/7.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cards">
                        <img src="/images/6.png" className='w-100' alt="" />
                        <div className="btnWrap">
                            <div className="shop"><FiShoppingBag /></div>
                            <div className="heart"><AiOutlineHeart /></div>
                            <div className="search"><FiSearch /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProducts