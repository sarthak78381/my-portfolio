import React, {useState, useEffect} from 'react';
import HeaderPc from './headerPc/HeaderPc';
import {NavLink} from 'react-router-dom';
import HeaderMobile from './headerMobile/HeaderMobile';
import './headerMobile/header-mobile.scss';


function Header({onWheelScroll, wheelScroll}) {

    useEffect(() => {
        let changedActive, changedActiveLink;
        if (wheelScroll < window.innerHeight) {
            changedActive = {
                active: "Profile",
                unActive: [ "Work", "Contact"]
            }
            changedActiveLink = {
                active: 0,
                unActive: [window.innerHeight, window.innerHeight*2]
            }
        }
        if (wheelScroll >= window.innerHeight && wheelScroll < window.innerHeight*2) {
            changedActive = {
                active: "Work",
                unActive: ["Profile", "Contact"]
            }
            changedActiveLink = {
                active: window.innerHeight,
                unActive: [0, window.innerHeight*2]
            }
        }
        if (wheelScroll >= window.innerHeight*2) {
            changedActive = {
                active: "Contact",
                unActive: ["Profile", "Work"]
            }
            changedActiveLink = {
                active: window.innerHeight*2,
                unActive: [0, window.innerHeight]
            }
        }
        isActive(changedActive);
        linkTo(changedActiveLink);;
    }, [wheelScroll])

    const [hamClicked, isHamClicked] = useState(false);

    const [active, isActive] = useState({
        active: "Profile",
        unActive: ["Work", "Contact"]
    });

    const [link, linkTo] = useState({
        active: 0,
        unActive: [window.innerHeight, window.innerHeight*2]
    });

    const [size, changeSize] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
        changeSize(window.innerWidth);
    })

    return size > 800 ? (<HeaderPc active={active} link={link} onWheelScroll={onWheelScroll}/>) : (
        <div>
            <HeaderMobile active={active} hamClicked={hamClicked} isHamClicked ={isHamClicked}/>
            <div className={`menu ${hamClicked ? "showMenu":""}`}>
                <div>
                    <div>
                        <ul>
                            <li><NavLink to={`#${active.unActive[0]}`} onClick={() => {
                                onWheelScroll(previousWheel => previousWheel + (link.unActive[0] -previousWheel));
                                isHamClicked(!hamClicked);
                            }}>{active.unActive[0]}</NavLink></li>
                            <li><NavLink to={`#${active.unActive[1]}`} onClick={() => {
                                onWheelScroll(previousWheel => previousWheel + (link.unActive[1] -previousWheel));
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
