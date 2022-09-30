import React from 'react'
import AllCategoriesFilter from '../components/AllCategoriesFilter'
import Header from '../components/Header'
import TopProducts from '../components/TopProducts'
import ProductsFilter from '../components/ProductsFilter'

const Main = () => {
    return (
        <>  
            <Header />
            {/* <AllCategoriesFilter />
            <TopProducts /> */}
            <ProductsFilter />
        </>
    )
}

export default Main