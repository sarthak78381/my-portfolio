import React, { useEffect, useRef } from 'react';
import './contact.scss';

function Contact({wheelScroll}) {
    const contactSection = useRef(null);
    const contactContainer = useRef(null);
    useEffect(() => {
        if (wheelScroll < 0) return;
        let oldRange = window.innerHeight*3 - window.innerHeight
        let newRange = 1 - 0;
        let op = ((wheelScroll - 0) * newRange / oldRange);
        wheelScroll >= window.innerHeight*2 ? contactContainer.current.style.opacity = `1` : contactContainer.current.style.opacity = `${op}`;
    }, [wheelScroll])
    return (
        <section className="contact_section" ref={contactSection} style={wheelScroll < window.innerHeight*3 && wheelScroll >= (window.innerHeight*2 - window.innerHeight/2) ? {opacity: 1}:{opacity: 0, visibility: "hidden"}}>
            <div className='contact_container' ref={contactContainer}>
                hello {wheelScroll}
            </div>
        </section>
    )
}

export default Contact
