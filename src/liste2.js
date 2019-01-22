import React, { Component } from 'react';

import Item_l2 from './item_l2';
 const tab=[{image:"https://www.docplanner.com/img/flag.png",
title:'Leader in 10 countries',
text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
{
    image:'https://www.docplanner.com/img/visits.png',
    title:'1 million appointments',
    text:'booked last month'
},
{image:'https://www.docplanner.com/img/patients.png',
title:'30 million unique patients',
text:'visit us every month'},
{
    image:'https://www.docplanner.com/img/doctors.png',
    title:'2 million active doctors',
    text:'trust in our solutions'
}]
class Liste2 extends Component {
    
    render() { 
        return ( <div className="list" >{tab.map((elt,i)=> <Item_l2  item={elt} key={i}/>)}</div> );
    }
}
 
export default Liste2;