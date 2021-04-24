import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import foodData from '../../FakeData/fakedata.json'

const Dinner = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        setMenu(foodData)
    },[])
    const result=menu.filter(({type})=>type ==='Dinner')

    const history=useHistory();

    const handleClick=(id)=>{
        history.push(`/foodDetail/${id}`)
    }
    return (
        <div className='container'>
             <div className='row'>
            {
                result.map(singleFood=>{
                    return(
                    <div className='ml-5 p-2 food-card' style={{textAlign:'center'}}
                    onClick={()=>handleClick(singleFood.id)}>
                      <Card style={{ width: '18rem',height:'28rem',border:'none'}}>
                        <Card.Img variant="top" src={singleFood.img} />
                        <Card.Body>
                        <Card.Title> <h6>{singleFood.name}</h6> </Card.Title>
                        <Card.Text>
                            How we dream about our future
                        </Card.Text>
                        <h2>${singleFood.price}</h2>
                       </Card.Body>
                       </Card>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Dinner;