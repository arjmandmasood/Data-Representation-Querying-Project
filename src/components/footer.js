import React from "react";

export class Footer extends React.Component{

    render(){
        return(
            <div>
                <section>
			<footer>
				<div class="container">
					<div class="row">
	{/* Footer Right */}
						<div class="col-lg-4 col-md-4 col-sm-12">
							<div class="footer-left">
								<h4>Footer Menu</h4>
								<hr></hr>

							<div class="footer-links">
								<p><a href="#">Home</a></p>
								<p><a href="#">About Us</a></p>
								<p><a href="#">Contact Us</a></p>
							</div>				
						  </div>
						</div>

	{/* Footer Center */}
						<div class="col-lg-4 col-md-4 col-sm-12"> 
							<div class="footer-center">
								<h4>Contact Us</h4>
								<hr></hr>
								<p>Digital Photo Gallery, Galway, Ireland</p>
								<p>Phone: +353 11 1111111</p>
								<p>Email: digitalphotogallery@gmail.com</p>
							</div>
						</div>

	{/* Footer Right */}
						<div class="col-lg-4 col-md-4 col-sm-12">
							<div class="footer-right">
								<h4>Social Media Links</h4>
								<hr></hr>
								<div class="footer-icons">
									<div><a href="#"><img src="img/facebook.png" alt="facebook icon"></img>Facebook</a></div>					
									<div><a href="#"><img src="img/instagram.png" alt="instagram icon"></img>Instagram</a></div>
									<div><a href="#"><img src="img/twitter.png" alt="twitter icon"></img>Twitter</a></div>
									<div><a href="#"><img src="img/snapchat.png" alt="snapchat icon"></img>Snapchat</a></div>

								</div>
							</div>
						</div>			   
					</div>	
				</div>				
				<div class="footer-bottom text-center">	
					<hr></hr>
					<p class="footer-company-name">Digital Photo Gallery</p>
					<hr></hr>
				</div>
				 
			</footer>
	  </section>
                {/* <h1>My Footer component</h1> */}
            </div>
        );
    }
}