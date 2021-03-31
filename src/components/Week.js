import React from 'react'

function Week() {
    return (
        <>
            <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-5 mt-1 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/1.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Gaming Laptop</h5>
        <p>This is the one of the most popular Gaming laptop for Game Lover.</p>
        <button className="btn btn-primary">Add to cart</button>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/2.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Officer Laptop</h5>
        <p>This is the one of the most popular Offical laptop for Offical Worker.</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/3.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Oven</h5>
        <p>This is the one of the most popular Oven that the all Top Chiefs used.</p>
        <button className="btn btn-primary">Add to cart</button>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/1.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Mobile</h5>
        <p>This is cheap & the best Mobile for using internet and playing games.</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>

  </div>
</div>
        </>
    )
}

export default Week
