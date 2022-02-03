import React from "react";
import "../Components/Screens/Navbar.css";
import { Link, useHistory } from "react-router-dom";

export default function Footer({navigation}){
    const history = useHistory();

    function go() {
    history.push("/contact");
  }
    return(
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">Car World</h5>
                        <p className="small text-muted">Car World is a car saling company in Pakistan . We have all new , latest models of cars and certified used cars as well.</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">CarWorld.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Get In Touch</h5>
                        <p className="small text-muted">For Feedback , Contact or get in touch .</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <button onClick={go} type="button" className="btn btn-primary btnx">Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}