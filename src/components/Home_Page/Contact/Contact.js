import React from "react";
import "./Contact.css";
import Walmart from '../../../assets/walmart.png';
import Adobe from '../../../assets/adobe.png';
import Microsoft from '../../../assets/microsoft.png';
import Facebook from '../../../assets/facebook.png';
import FacebookIcon from '../../../assets/facebook-icon.png';
import TwitterIcon from '../../../assets/twitter.png';
import YouTubeIcon from '../../../assets/youtube.png';
import InstagramIcon from '../../../assets/instagram.png';

const Contact = () => {
	return (
		<section id="contactPage">
			<div id="clients">
				<h1 className="contactPageTitle">My clients</h1>
				<p className="clientDesc">
					I have had the opportunity to work with a diverse group of
					companies. Some of the notable companies I have worked with
					include
				</p>
				<div className="clientImgs">
					<img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
				</div>
			</div>
			<div id="contacts">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out teh form below to discuss any work opportunities</span>\
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder="Your name"/>
                    <input type="email" className="email" placeholder="Your email"/>
                    <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="" className="link" />
                        <img src={TwitterIcon} alt="" className="link" />
                        <img src={YouTubeIcon} alt="" className="link" />
                        <img src={InstagramIcon} alt="" className="link" />

                    </div>
                </form>
            </div>
		</section>
	);
};

export default Contact;
