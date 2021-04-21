import React from 'react';
import './header-mobile.scss';


function HeaderMobile({active, isHamClicked, hamClicked}) {
    return (
        <div className="navBar">
            <div className="navFixed">
                <div className="nav-container">
                    <div className="activeNav">
                        <h2 className='activeLink'>{active.active}</h2>
                    </div>
                    <div className="hamburger" onClick={() => isHamClicked(!hamClicked)}>
                        <div className={`${hamClicked ? 'checked':null}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;
