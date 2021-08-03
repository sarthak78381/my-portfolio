import React, {useEffect, useRef} from 'react';
import ProfileSkills from '../ProfileSkills/ProfileSkills';
import ProfileCard from '../ProfileCard/ProfileCard';
import './Profile.scss';

function Profile({wheelScroll}) {
    let container1 = useRef(null);
    let container2 = useRef(null);
    let mainContainer = useRef(null);
    useEffect(() => {
        if (wheelScroll < 0) return;
        let check = window.innerHeight - wheelScroll;
        let oldRange = window.innerHeight - 0
        let newRange = 1 - 0;
        let op = ((check - 0) * newRange / oldRange);
        container1.current.style.opacity = `${op}`;
        container1.current.style.transform = `translateX(-${wheelScroll > 0 ? wheelScroll:0}px)`;
        container2.current.style.transform = `translateX(${wheelScroll > 0 ? wheelScroll:0}px)`;
        container2.current.style.opacity = `${op}`;
        if (wheelScroll > window.innerHeight-(window.innerHeight/2)) {
            mainContainer.current.style.opacity = 0;
        } else {
            mainContainer.current.style.opacity = 1;
        }
    }, [wheelScroll])

    return (
        <section id='Profile' ref={mainContainer}>
            <div className='profileContainer'>
                <div className="container1 profileFlex" ref={container1} style={{
                    transform: `translateX(-${wheelScroll > 0 ? wheelScroll:0}px)`
                }}>
                    <div className="profileIntro">
                        <div className="introLine">
                            <h2><span className='firstLetter'>H</span>ey, I am <span className='userName'>Sarthak Gupta</span>!</h2>
                        </div>
                        <div className="introSkills">
                            <h2>I Work As A</h2>
                            <div>
                                <ProfileSkills /><span className='blinkingBar'>|</span>
                            </div>
                            <div className="about-buttonContainer">
                                <button className='about-button'>About</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container2 profileFlex" ref={container2} style={{
                    transform: `translateX(${wheelScroll > 0 ? wheelScroll:0}px)`
                }}>
                    <ProfileCard/>
                </div>
            </div>
        </section>
    )
}



export default Profile
