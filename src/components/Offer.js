import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Products from './Products'

const Offer = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="col-md-12 shadow-lg text-center mt-3 mb-3 p-3">
                    <h1>Todays Offer</h1>
                </div>
            </div>

            <Products />
            <Footer />
        </>
    )
}

export default Offer
