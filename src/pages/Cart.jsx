import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE } from '../redux/actions/action'

const Cart = () => {
    const [price, setPrice] = useState(0)
    const getdata = useSelector(state => state.cartReducer.carts)

    const dispatch = useDispatch()

    const deleteProduct = id => {
        dispatch(DELETE(id))
    }

    // TOTAL PRICE
    const totals = () => {
        let price = 0
        getdata.map(item => {
            price = parseFloat(item.price) * item.qty + price
        })
        setPrice(price)
    }


    useEffect(() => {
        totals()
    }, [totals])

    return (
        <div className='Cart'>
            <div className="container">
                <div className="row">
                    {getdata.length > 0 ? <>
                        {getdata.map(item => (
                            <div key={item.id} className="col-lg-4">
                                <Link to={`/cart/${item.id}`}><img src={item.image} alt={item.title} className="w-100" /></Link>
                                <h5>{item.title.slice(0, 20)} ...</h5>
                                <h6>Price: {item.price} sum</h6>
                                <h6>Quantity: {item.qty}</h6>
                                <i onClick={() => deleteProduct(item.id)}><AiOutlineDelete /></i>
                            </div>
                        ))}
                        <h4>Total: {price} sum</h4>
                    </> : <>
                        <h5>Your cart is empty</h5>
                        <Link to='/'>Go shopping</Link>
                    </>}
                    <div className="col-lg-8 mx-auto">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
