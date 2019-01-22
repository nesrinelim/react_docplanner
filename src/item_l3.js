import React, { Component } from 'react';
import {Thumbnail,Button,Grid,Row,Col } from 'react-bootstrap';
const Item_l3=(props)=>{
    return (
        <div>
            
    <Col xs={12} md={4} >
      <Thumbnail src={props.item.image} alt="mmmm">
       <div style={{display:'flex', justifyContent:'space-around'}}>
        <p>{props.item.label}</p>
        <p>
          <Button bsStyle="primary">{props.item.btn}</Button>
         
        </p>
        </div>
      </Thumbnail>
    </Col>
    {/* <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col> */}
  
        </div>
    )
}
export default Item_l3;