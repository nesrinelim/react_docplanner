import React, { Component } from 'react';
import './item_l1.css';
const Item_l1 = (props) =>{
     let color=props.item.color;
     if (props.item.btn===""){return (<div>
         <p className='tex'>{props.item.text}</p>
            <div className="box" style={{background: color }}>
            <h6>{props.item.s_title}</h6>
            <h2 style={{marginBottom:'8%'}}>{props.item.title}</h2>
            <div>
              <img className='image' src={props.item.image} alt='imhhjn' width='60%'  height='70%'/>
            </div>
            </div>
     </div>)}
    return(
        <div>
            <p className='tex'>{props.item.text}</p>
            <div className="box" style={{background: color }}>
            <h6>{props.item.s_title}</h6>
            <h2>{props.item.title}</h2>
            <div>
            <select class="list_i"  >
                <option >{props.item.btn}</option>
                <option value="saab">Argentina</option>
                <option value="opel">Australia</option>
                <option value="audi">Brazil</option>
            </select>
              <img className='image' src={props.item.image} alt='imhhjn' width='60%'  height='70%'/>
            </div>
            </div>
        </div>
    );
}


export default Item_l1;


 
