import React from 'react';
import Footer from '../Footer';
import "../Screens/Home.css";


export default function About(){
    return(
    <div>
        <div id="carouselExampleIndicators" className="carousel slide pop" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/photos/generic-white-car-isolated-on-white-background-picture-id1186972461?b=1&k=20&m=1186972461&s=170667a&w=0&h=rDCDVPjC73cZyYLEu87qBRAvDUmJ6tVv5BvLG2Y9ycU=" className="d-block w-100 vbv" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=" className="d-block w-100 vbv" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://s1.1zoom.me/b5050/158/Honda_Civic_White_background_Sedan_Grey_526338_3840x2160.jpg" className="d-block w-100 vbv" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='Abtdiv' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
<h1 class="display-3">About Us</h1>
<div className='aboutdiv'>
<blockquote class="blockquote ml-5 para">
  <p class="ml-5">Welcome to Car World. We specialise in providing an excellent Personal Service 
  and the very best new and used vehicle deals around. 
  From having full retail premises, and the overheads that accompany such an operation,
   we are now embracing the internet to reduce our costs and offer the most competitive vehicle deals
    available.
    <br/> <br/> If you wish to make arrangements to view any of our vehicles please contact us and 
    the vehicle will be removed from sale, for the duration of your trip, 
    so you can plan your
     journey confident that the vehicle will be available for your inspection upon arrival.
Over 30 years experience supplying quality vehicles to the motor trade and public.</p>
  <span class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></span>
</blockquote>
</div>
</div>
<Footer/>
    </div>
    );
}