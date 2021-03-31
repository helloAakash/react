import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Day from './Day';
import Week from './Week';

const Deals = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <h2>Deals and Promotions</h2>
                    <snap>SHop TOday's Deals, Lightning Details, and limited-time discounts</snap>
                    <div className="col-md-4">
                        <h4>Categories</h4>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Mobile
                                    </label>
                            </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Laptop
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            clothes
                                    </label>
                            </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Beauty
                                    </label>
                                    </div>
                                    <Link className="text-decoration-none btn btn-info">See More</Link>
                        </form>

                                <div className="mt-2">
                                    <h3>Deal Type</h3>
                                    <Link to="#" className="text-decoration-none">Deal of the Day</Link>
                                    <Link to="#" className="text-decoration-none">Lightning Deal</Link>
                                    <Link to="#" className="text-decoration-none">Saving and sales </Link>

                                </div>
                                </div>

                                <div className="col-md-10">
                                    <div className="shadow p-2">
                                        <center><h3>Deals of the Day</h3></center>
                                    </div>

                                    <Day/>
                                    <div className="shadow p-2">
                                        <center><h3>Deals of the week</h3></center>
                                    </div>
                                    <Week/>
                                </div>
                                
                            </div>
            </div>
            <Footer />
        </>
    )
}


export default Deals