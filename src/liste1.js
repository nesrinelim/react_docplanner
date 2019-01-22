import React, { Component } from 'react';
import './liste1.css';
import Item_l1 from './item_l1';

const tab=[
    {text:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
s_title:'For patients',
title:'Find a doctor, book a visit and solve any health-related doubt',
btn:'choose country',
image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
color:"#00ccb1"},
    {text:'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.',
s_title:'For doctors',
title:'Save time managing visits and cut no-shows by half',
btn:'',
image:'https://www.docplanner.com/img/screen-saas@2x.png',
color:"#3d83df"}
];

class Liste1 extends Component {
    render() { 
       
        return ( <div className="block">{tab.map((elt,i)=> <Item_l1  item= { elt} key={i}/>)} </div> );

    }
}
 
export default Liste1;