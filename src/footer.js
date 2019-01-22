import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    
    render() { 
        return ( <div className='ftr'>
            <hr/>
            <p >We are leaders in 10 countries: <a className='ref' href='#'>Poland</a>,<a className='ref' href='#'>Turkey</a> , <a className='ref' href='#'>Spain</a>, <a className='ref' href='#'>Italy</a>, and<a className='ref' href='#'> Chile</a></p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser. 
www.docplanner.com © 2018</p>
        </div> );
    }
}
 
export default Footer;