import React from 'react'

export class Content extends React.Component {
  render() {
    return (
      <div>
        {/* carousel */}
        <section>
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
			  <div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			  </div>
			  <div class="carousel-inner">
				<div class="carousel-item active" data-bs-interval="4000">
				  <img src="img/carousel-img-1.jpg" class="d-block w-100" alt="..."></img>
				</div>
				<div class="carousel-item" data-bs-interval="4000">
				  <img src="img/carousel-img-2.jpg" class="d-block w-100" alt="..."></img>
				</div>
				<div class="carousel-item" data-bs-interval="4000">
				  <img src="img/carousel-img-3.jpg" class="d-block w-100" alt="..."></img>
				</div>
			  </div>
			  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			  </button>
			</div>					
	</section>

        {/* Main Content */}
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-1.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Saint Mary's Road, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src={'img/img-2.jpg'} alt="pic"></img>
                  <p class="index-img-title">
                    Queen Street, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-3.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Dominick Street Lower, Galway<br></br>€5
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-4.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-5.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-6.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-7.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-8.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="index-img">
                  <img src="img/img-9.jpg" alt="pic"></img>
                  <p class="index-img-title">
                    Ballyloughane Beach, Galway<br></br>€5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <h1>Hello World!!!!!!!!!!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      </div>
    )
  }
}
