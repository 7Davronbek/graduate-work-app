import React from 'react'
import AllCategoriesFilter from '../components/AllCategoriesFilter'
import Header from '../components/Header'
import TopProducts from '../components/TopProducts'

const Main = () => {
    return (
        <>  
            <Header />
            <AllCategoriesFilter />
            <TopProducts />
        </>
    )
}

export default Main