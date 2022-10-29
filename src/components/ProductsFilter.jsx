import React, { useState } from 'react'
import { data } from '../backend'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProductsFilter = () => {

    const [datas, setDatas] = useState(data)
    const allCategories = ['All', ...new Set(datas.map((item) => item.category))]
    const [category, setCategory] = useState(allCategories)

    const handleFilter = category => {
        const newItem = data.filter((item) => item.category === category)
        setDatas(newItem)

        if (category === 'All') {
            setDatas(data)
            return
        }
    }

    return (
        <div className='ProductsFilter TopProducts'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {category.map((item, index) => (
                            <button onClick={() => handleFilter(item)} key={index} className='btn myBtn'>{item}</button>
                        ))}
                    </div>
                </div>

                <div className="row">
                    {datas.map((item, index) => (

                        <div key={index} className="col-lg-4">
                            <div className="cards">
                                <div className="cardsHeader">
                                    <img src={item.image} className='w-100' alt={item.title} />
                                    <div className="btnWrap">
                                        <div className="shop"><FiShoppingBag /></div>
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
        </div>
    )
}

export default ProductsFilter