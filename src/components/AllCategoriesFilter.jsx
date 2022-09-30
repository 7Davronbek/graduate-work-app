import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchProducts from "./SearchProducts";

const AllCategoriesFilter = () => {

    const [value, setValue] = useState('')

    const onChange = e => {
        setValue(e.target.value)
    }

    const onSearch = key => {
        setValue(key)
    }
    return (
        <div className='AllCategoriesFilter'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 mx-auto">
                        <div className="wrap">
                            <h5>All Categories</h5>
                            <hr />
                            <input onChange={onChange} type="text" placeholder='Search Products...' className="form-control ms-2" />
                            <BiSearch />
                        </div>

                    </div>




                </div>

                <div className="row TopProducts py-5">

                    <SearchProducts value={value} onSearch={onSearch} />

                    <div className="col-lg-12">
                        <p>Examples: Mockup, PSD, Schema, Image...</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllCategoriesFilter