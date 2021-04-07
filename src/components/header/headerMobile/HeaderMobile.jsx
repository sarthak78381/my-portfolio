import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import './header-mobile.scss';


function HeaderMobile({active, changeActiveLink}) {
    const [hamClicked, isHamClicked] = useState(false);
    return (
        <div className="navBar">
            <div className="navFixed">
                <div className="nav-container">
                    <div className="activeNav">
                        <NavLink to={active.active} className='activeLink'>{active.active}</NavLink>
                    </div>
                    <div className="hamburger" onClick={() => isHamClicked(!hamClicked)}>
                        <div className={`${hamClicked ? 'checked':null}`}></div>
                    </div>
                </div>
                <div className={`menu ${hamClicked ? "showMenu":""}`}>
                    <div>
                        <div>
                            <ul>
                                <li><NavLink to={active.unActive[0]} onClick={() => {
                                    changeActiveLink(0,1);
                                    isHamClicked(!hamClicked);
                                }}>{active.unActive[0]}</NavLink></li>
                                <li><NavLink to={active.unActive[1]} onClick={() => {
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
        </div>
    )
}

export default HeaderMobile;
