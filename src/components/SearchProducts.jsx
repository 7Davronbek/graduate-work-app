import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { data } from '../backend'

const SearchProducts = ({ value, onSearch }) => {
    return (
        <>
            {/* <div className='SearchProducts TopProducts my-5'> */}

            {data.filter((item, index) => {
                const searchKey = value.toLowerCase()
                const title = item.title.toLocaleLowerCase()

                return searchKey && title.startWith(searchKey) && title !== searchKey


            }
            ).slice(0, 10).map(item, index) => {
                <div key={index} className="col-lg-4">
                    <div className="cards">
                        <div className="cardsHeader">
                            <img src={item.image} className='w-100' alt="" />
                            <div className="btnWrap">
                                <div className="shop"><FiShoppingBag /></div>
                                <div className="heart"><AiOutlineHeart /></div>
                                <div href={item.image} data-fancybox="elastic" className="search"><FiSearch /></div>
                            </div>
                        </div>
                        <Link to='/product' className="cardsBody">
                            <h5>{item.title}</h5>
                            <h6>Price: {item.price}</h6>
                            <p>By {item.creator}</p>
                        </Link>
                    </div>
                </div>}}

            {/* </div> */}
        </>
    )
}

export default SearchProducts