import React, {useState} from 'react';
import HeaderPc from './headerPc/HeaderPc';
import HeaderMobile from './headerMobile/HeaderMobile';


function Header() {
    const [active, isActive] = useState({
        active: "Home",
        unActive: ["Work", "Contact"]
    });

    const [size, changeSize] = useState(window.innerWidth);

    const changeActiveLink = (changedPos, unChangedPos2) => {
        let changedActive = {
            active: `${active.unActive[`${changedPos}`]}`,
            unActive: [`${active.active}`, active.unActive[`${unChangedPos2}`]]
        }
        isActive(changedActive)
    }

    window.addEventListener('resize', () => {
        changeSize(window.innerWidth);
    })
    return size > 800 ? (<HeaderPc active={active} changeActiveLink={changeActiveLink}/>) : (<HeaderMobile active={active} changeActiveLink={changeActiveLink}/>)
}

export default Header
