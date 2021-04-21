import React, {useRef, useEffect, useState} from 'react';
import ProfileCardCode from './ProfileCardCode';
import ProfileCardSite from './ProfileCardSite';
import './ProfileCard.scss';

function ProfileCard() {

    const cardRef = useRef(null);
    const upperCardRef = useRef(null);
    const parentCardRef = useRef(null);
    const [RunBtnClicked, isRunBtnClicked] = useState(false);

    const handleGetIntoNormalPos = () => {
        cardRef.current.style.transition = 'all 1s ease'
        cardRef.current.style.transform = `translate(-10px, -25px) rotateX(25deg) rotateY(-30deg) rotateZ(25deg)`
        upperCardRef.current.style.transition = 'all 1s ease' 
        upperCardRef.current.style.transform = `translate(-10px, -25px) rotateX(25deg) rotateY(-30deg) rotateZ(25deg) translateZ(70px)`
    }
    
    useEffect(() => {
        handleGetIntoNormalPos();
    }, []) 

    const handleMove = e => {
        let x;
        if (window.innerWidth === parentCardRef.current.offsetWidth) {
            x = (((window.innerWidth / 2)) - e.pageX)/25;
        } else {
            x = (((window.innerWidth / 2 + parentCardRef.current.offsetWidth / 2)) - e.pageX)/25;
        }
        let y = ((window.innerHeight / 2) - e.pageY)/25;
        cardRef.current.style.transition = 'all .1s ease-out'
        cardRef.current.style.transform = `translate(0px, 0px) rotateX(${y}deg) rotateY(${x}deg) rotateZ(0deg)`
        upperCardRef.current.style.transition = 'all .1s ease-out'
        upperCardRef.current.style.transform = `translate(0px, 0px) rotateX(${y}deg) rotateY(${x}deg) rotateZ(0deg) translateZ(30px)`
    }
    return RunBtnClicked ? 
    <ProfileCardSite parentCardRef={parentCardRef} isRunBtnClicked={isRunBtnClicked} handleMove = {handleMove} handleGetIntoNormalPos={handleGetIntoNormalPos} cardRef={cardRef} upperCardRef={upperCardRef}/> : 
    <ProfileCardCode parentCardRef={parentCardRef} isRunBtnClicked={isRunBtnClicked} handleMove = {handleMove} handleGetIntoNormalPos={handleGetIntoNormalPos} cardRef={cardRef} upperCardRef={upperCardRef}/>
}

export default ProfileCard

