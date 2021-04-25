import React from 'react';
import './contact.scss';

function Contact({wheelScroll}) {
    return (
        <div className='contact-container' style={{display: wheelScroll === window.innerHeight*2 ? "" : "none",opacity:"1"}}>
            hello {wheelScroll}
        </div>
    )
}

export default Contact
