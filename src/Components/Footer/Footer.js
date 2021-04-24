import React from 'react';
import cooker from '../../images/chef-cook-food-33614.png'
import delivary from '../../images/architecture-building-city-2047397.png'
import fatman from '../../images/adult-blur-blurred-background-687824.png'

const Footer = () => {
    return (
        <div>
            <h3>Why you choose us</h3>
            <p style={{width:'320px'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quasi! Lorem ipsum
            </p>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <img style={{width:'330px',height:'330px'}} src={fatman} alt=""/>
                    <h4 className='mt-3'>Fast Delivery</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nulla ex delectus? Ipsum esse sed, nemo unde cum saepe necessitatibus.
                    </p>
                </div >
                <div className='col-md-4'>
                    <img style={{width:'330px',height:'330px'}} src={cooker} alt=""/>
                    <h4 className='mt-3'>A Good Auto Responder</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam, deserunt possimus vitae illo inventore? Tempora ipsum hic a molestias.
                    </p>
                </div>
                <div className='col-md-4'>
                    <img style={{width:'330px',height:'330px'}} src={delivary} 
                    alt=""/>
                    <h4 className='mt-3'>Home Delivery</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae sequi a architecto ullam sapiente impedit quas, sint ex odio.
                    </p>
                </div>
            </div>
            <section className='mt-4' style={
                {
                 backgroundColor:'indigo',
                 color:'white',
                 padding:'20px',
                }}>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>DAILY-FOOD</h2>
                    </div>
                    <div className='col-md-3'>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className='col-md-3'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurant near me</p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-6'>copyright @2021 robin all right reserved</div>
                    <div className='col-md-2'>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='col-md-2'>
                        <p>Terms of Use</p>
                    </div>
                    <div className='col-md-2'>
                        <p>Pricing</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;