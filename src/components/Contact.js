import React from 'react'
import Contactform from './Contactform'
import Footer from './Footer'
import NavBar from './NavBar'
import Map from './Map'

function Contact() {
    return (
        <>
            <NavBar/>

            <div className="container mt-5 mb-3">
                <div className="row">
                    <Contactform/> 
                    <Map/>
                </div>
                    
                
                
            </div>
            <Footer/>
        </>
    )
}

export default Contact
