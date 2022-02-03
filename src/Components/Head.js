import React from "react";
import "./Screens/Home.css";
import "./Shopping.css";


export default function Head(){

    return(
        <div>
        <div className='div1'>
            <div data-aos="fade-down">
                <h1 className="display-1">Car World</h1>
                <span className="blockquote-footer">Good Car for Good Moments </span>
            </div>
        </div>
            <div>
        <h1 className="display-1 imgonpic">Car World <br /> <span className='display-4 ggg'>Selling You the best cars in best prices , all over the country.</span></h1>
        <img src="https://www.expatica.com/app/uploads/sites/3/2017/02/selling-a-car-1920x1080.jpg" className="img-fluid rty" alt="..."></img>
        </div>
        </div>
    );
}