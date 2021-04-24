import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';
import Body from '../Body/Body';
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className='banner'>
                    <h1 className='text'>Best food is waiting for you.!</h1>
                    <div className="input">
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search food items.."
                    />
                        <InputGroup.Append>
                        <Button variant="danger">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
            <Body/>
        </div>
    );
};

export default Home;