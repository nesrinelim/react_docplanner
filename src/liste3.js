import React, { Component } from 'react';
import {Grid,Row } from 'react-bootstrap';

import './liste3.css'
import Item_l3 from './item_l3'
const tab=[{image:'https://www.docplanner.com/images/warsaw.png',
label:'Warsaw',
btn:'SEE OPENING'},{image:'https://www.docplanner.com/images/barcelona.png',
label:'Barcelona',
btn:'SEE OPENING'},{image:'https://www.docplanner.com/images/istanbul.png',
label:'Istanbul',
btn:'SEE OPENING'},{image:'https://www.docplanner.com/images/rome.png',
label:'Rome',
btn:'SEE OPENING'},{image:'https://www.docplanner.com/images/mexico-city.png',
label:'Mexico city',
btn:'SEE OPENING'},{image:'https://www.docplanner.com/images/curitiba.png',
label:'Curitiba',
btn:'SEE OPENING'}]

class Liste3 extends Component {
    
    render() { 
        return ( <div className='card'>
        <div className="card_txt">
            <h1 className='title'>Improve the lives of millions. Change yours forever</h1>
            <p className='txt'>More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
        </div>
        <Grid>  <Row>
        {tab.map((elt,i)=> <Item_l3 item={elt}  key={i}/>)}
            </Row></Grid>
        </div> );
    }
}
 
export default Liste3;