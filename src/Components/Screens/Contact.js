import React from 'react';
import Footer from '../Footer';

export default function Contact() {
    return (
        <div>
        
<div className="container contact-form">
            <div className="contact-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpbWC3LqSaxvDfhjVANc_3TQiXKWYPM0bgw&usqp=CAU" alt="rocket_contact"/>
            </div>
            <form method="post" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
<Footer/>
        </div>
    );
}