import React, { Component } from 'react';
import './item_l2.css'

const Item_l2 =(props)=>{
    return(
        <div className="box_">
            <img src={props.item.image}/>
            <h2 className='th2'>{props.item.title}</h2>
            <p className='tp'>{props.item.text}</p>
        </div>
    )
}
export default Item_l2;