import React, {useState} from 'react';
import HeaderPc from './headerPc/HeaderPc';
import {NavLink} from 'react-router-dom';
import HeaderMobile from './headerMobile/HeaderMobile';
import './headerMobile/header-mobile.scss';


function Header() {
    const [hamClicked, isHamClicked] = useState(false);
    const [active, isActive] = useState({
        active: "Profile",
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
    return size > 800 ? (<HeaderPc active={active} changeActiveLink={changeActiveLink}/>) : (
        <div>
            <HeaderMobile active={active} changeActiveLink={changeActiveLink} hamClicked={hamClicked} isHamClicked ={isHamClicked}/>
            <div className={`menu ${hamClicked ? "showMenu":""}`}>
                <div>
                    <div>
                        <ul>
                            <li><NavLink to={`#${active.unActive[0]}`} onClick={() => {
                                changeActiveLink(0,1);
                                isHamClicked(!hamClicked);
                            }}>{active.unActive[0]}</NavLink></li>
                            <li><NavLink to={`#${active.unActive[1]}`} onClick={() => {
                                changeActiveLink(1,0)
                                isHamClicked(!hamClicked);
                            }}>{active.unActive[1]}</NavLink></li>
                            <li>
                                <div className='socialDiv'>
                                    <p>Get To Know More On:</p>
                                    <div className="socialLinks">
                                        <NavLink to='work' className='unActiveHover'><i className="fab fa-instagram"></i></NavLink>
                                        <NavLink to='contact' className='unActiveHover'><i className="fab fa-github"></i></NavLink>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
