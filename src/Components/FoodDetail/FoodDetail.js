import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../FakeData/fakedata.json'
import './FoodDetail.css'
import { FaShoppingCart } from 'react-icons/fa';

const FoodDetail = () => {
    const {id}=useParams()
    const [singleProduct,setSingleProduct]=useState([])
    useEffect(()=>{
        setSingleProduct(fakeData)
    },[])
    const singleFood=singleProduct.filter(product=>product.id==id)
    const {name,img,price}=singleFood[0]||{}
    return (
        <div className='row detail'>
            <div style={{width:'400px',marginTop:'120px'}} className='col-md-5'>
                <h1>{name}</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex, minima a nobis eum sint amet molestias at fugiat pariatur commodi reprehenderit, in adipisci facere debitis aut error praesentium</p>
                <h1>${price}</h1>
                <br/>
                <Button variant='danger'><FaShoppingCart size={20}/>  Add</Button>
            </div>
            <div className='col-md-7'>
                <img style={{width:'550px',height:'550px',marginLeft:'80px',marginTop:'10px'}} src={img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetail;