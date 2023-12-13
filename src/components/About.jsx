import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import './about.scss'

export const About = () => {
    return (
        <div className='container'>
            <div className="holder">
            <div className='about-section'>
            <div className="text-container">
            <h2>Welcome to Our Store!</h2>
            <p>We believe in bringing you the finest productsvwith a touch of unique property. Our mission is to providing you with main benefits or special features.
            </p>
            <h2>Our Story</h2>
            <p>
                Founded in 2010, Our Store has been a labor of love. We started with a passion for products and a vision to general objective or value.
                Over the years, we've expanded in the world.
            </p></div>
            <img src={about2} alt="about2" /></div>
            <div className='about-section'>
            <img src={about1} alt="about1" />
            <div className="text-container">

            <h2>What Sets Us Apart?</h2>
            
                <ul>
                    <li>Quality Craftsmanship: Every product is crafted with precision and care to ensure quality and durability.</li>
                    <li>Unique Designs: Discover categoties that stand out with our exclusive designs</li>
                    <li>Customer Satisfaction: Your happiness is our priority. We strive to provide an exceptional shopping experience and top-notch customer service.</li>
                
                </ul>
            
            <h2>Connect With Us</h2>
            <p>
                Join our community on social media to stay updated on the latest news and promotions.
                Thank you for choosing Us.
            </p>
        </div></div></div></div>
    )
}

