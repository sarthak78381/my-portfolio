import React, {useEffect, useRef} from 'react';
import './Work.scss';

function Work({wheelScroll}) {
    const WorkSection = useRef(null);
    const WorkContainer = useRef(null);

    useEffect(() => {
        if (wheelScroll < 0) return;
        let oldRange = window.innerHeight*2 - window.innerHeight
        let newRangeofLoad = 1 - 0;
        let op = ((wheelScroll - 0) * newRangeofLoad / oldRange) - 0.5;
        let oldRangeofUnload = window.innerHeight*3 - window.innerHeight
        let newRangeofUnload = 1 - 0;
        let opofUnload = Math.abs(((wheelScroll - 0) * newRangeofUnload / oldRangeofUnload) - 1);
        wheelScroll >= window.innerHeight ? WorkSection.current.style.opacity = `1` : WorkSection.current.style.opacity = `${op}`;
        wheelScroll >= window.innerHeight ? WorkContainer.current.style.opacity = `1` : WorkContainer.current.style.opacity = `${op}`;
        wheelScroll >= (window.innerHeight*2 - (window.innerHeight/2)) ? WorkSection.current.style.opacity = `${opofUnload}` : WorkSection.current.style.opacity = `1`;
    }, [wheelScroll])
    return (
        <section id="Work" style={wheelScroll < window.innerHeight*2 && wheelScroll >= (window.innerHeight - window.innerHeight/2) ? {opacity: 1}:{opacity: 0, visibility: "hidden"}} ref={WorkSection}>
            <div className='work-container' ref={WorkContainer}>
                hello {wheelScroll}
            </div>
        </section>
    )
}

export default Work;
