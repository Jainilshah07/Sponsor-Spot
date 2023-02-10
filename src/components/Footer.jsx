import React from 'react';
import Linkdin from '../asset/linkedin.svg';
import twitter from '../asset/twitter.svg';
import Instagram from '../asset/instagram.svg';
const Footer = () => {
    return (
        <>
            <footer class="bg-light py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h5 class="mb-4">About</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla justo at malesuada sollicitudin. Sed eget lacus in neque tempor egestas. Maecenas sit amet justo vel quam bibendum dapibus vel quis velit. </p>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <img src={twitter}/>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <img src={Linkdin}/>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <img src={Instagram}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5 class="mb-4">Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5 class="mb-4">Services</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Graphic Design</a></li>
                                <li><a href="#">Online Marketing</a></li>
                                <li><a href="#">Hosting and Support</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5 class="mb-4">Contact</h5>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt mr-3"></i> 123 Main Street, Anytown, USA</li>
                                <li><i class="fas fa-phone mr-3"></i> (123) 456-7890</li>
                                <li><i class="fas fa-envelope mr-3"></i> info@yourwebsite.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};
export default Footer;