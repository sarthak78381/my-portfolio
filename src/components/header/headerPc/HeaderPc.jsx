import React from 'react';
import {NavLink} from 'react-router-dom';
import './header-pc.scss';


function HeaderPc({active, onWheelScroll, link}) {

    return (
        <nav>
            <div className="nav-container">
                <div className="activeNav">
                    <h2 className='activeLink'>{active?.active}</h2>
                </div>
                <div className="unActiveNav">
                    <div className="webNavLinks">
                        <h4 className='unActiveLink unActiveHover' onClick={() => {
                            onWheelScroll(previousWheel => previousWheel + (link?.unActive[0] - previousWheel));
                        }}>{active?.unActive[0]}</h4>
                        <h4 className='unActiveLink unActiveHover' onClick={() => {
                            onWheelScroll(previousWheel => previousWheel + (link.unActive[1] - previousWheel));
                        }}>{active?.unActive[1]}</h4>
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
