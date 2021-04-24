import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="container">
            <Navbar>
                <Navbar.Brand> <Link className='nav-content' to='/home'><h1>Daily-Food</h1></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link style={{marginRight:'30px'}} to='/shipment'><FaShoppingCart size={28}/></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                        <Link className='nav-content' to='/signup'><Button variant="danger">Sign Up</Button></Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Home;