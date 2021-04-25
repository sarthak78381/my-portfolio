import React, {useEffect, useRef} from 'react';
import './Work.scss';

function Work({wheelScroll}) {
    const WorkSection = useRef(null);
    const WorkContainer = useRef(null);

    useEffect(() => {
        if (wheelScroll < 0) return;
        let oldRange = window.innerHeight*2 - window.innerHeight
        let newRange = 1 - 0;
        let op = ((wheelScroll - 0) * newRange / oldRange) - 0.5;
        wheelScroll >= window.innerHeight ? WorkSection.current.style.opacity = `1` : WorkSection.current.style.opacity = `${op}`;
        if (wheelScroll > window.innerHeight*2-(window.innerHeight*2/5)) {
            WorkContainer.current.style.animation = 'unLoadComponent 2s forwards ease';
        } else {
            WorkContainer.current.style.animation = 'loadComponent 3s forwards ease';
        }
    }, [wheelScroll])
    return (
        <section id="Work" style={{display: wheelScroll < window.innerHeight*2 && wheelScroll >= (window.innerHeight - window.innerHeight/2) ? "" : "none",opacity:"0"}} ref={WorkSection}>
            <div className='work-container' ref={WorkContainer}>
                hello {wheelScroll}
            </div>
        </section>
    )
}

export default Work;
