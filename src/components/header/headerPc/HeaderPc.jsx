import React from 'react';
import {NavLink} from 'react-router-dom';
import './header-pc.scss';


function HeaderPc({active, changeActiveLink}) {
    return (
        <nav>
            <div className="nav-container">
                <div className="activeNav">
                    <h2 className='activeLink'>{active.active}</h2>
                </div>
                <div className="unActiveNav">
                    <div className="webNavLinks">
                        <NavLink to={`#${active.unActive[0]}`} className='unActiveLink unActiveHover' onClick={() => {
                            changeActiveLink(0, 1)
                        }}>{active.unActive[0]}</NavLink>
                        <NavLink to={`#${active.unActive[1]}`} className='unActiveLink unActiveHover' onClick={() => {
                            changeActiveLink(1, 0)
                        }}>{active.unActive[1]}</NavLink>
                    </div>
                    <div className="socialLinks">
                        <div>
                            <NavLink to='work' className='unActiveHover'><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to='contact' className='unActiveHover'><i className="fab fa-github"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderPc;
