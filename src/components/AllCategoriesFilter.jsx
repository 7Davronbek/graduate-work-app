import React from 'react'
import { BiSearch } from 'react-icons/bi'

const AllCategoriesFilter = () => {
    return (
        <div className='AllCategoriesFilter'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="wrap">
                            <h5>All Categories</h5>
                            <hr />
                            <input type="text" placeholder='Search Products...' className="form-control ms-2" />
                            <BiSearch />
                        </div>

                        <p>Examples: Mockup, PSD, Schema, Image...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategoriesFilter