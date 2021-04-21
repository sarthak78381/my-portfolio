import React, {useState} from 'react';
import './ProfileCard.scss';

function ProfileCardSite({handleMove, handleGetIntoNormalPos, cardRef, upperCardRef, parentCardRef}) {
    setTimeout(() => {
        isLoading(false);
    }, 500);
    const [loading, isLoading] = useState(true);
    return loading ? (
        <div className="Profile-cardParent">
            <div className="Profile-cardChild shadow-container">
                <div className="loader-container bg-colorWhite">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    ) : (
        <div className='Profile-cardParent' onMouseMove={handleMove} onMouseLeave = {handleGetIntoNormalPos} ref={parentCardRef} onTouchMove={(e) => {
            let ev = {
                pageX: e.targetTouches[0].pageX,
                pageY: e.targetTouches[0].pageY,
            }
            handleMove(ev);
        }} onTouchEnd={handleGetIntoNormalPos}>
            <div className="Profile-cardChild">
                <div className="profileCard-lower bg-colorWhite" ref={cardRef}>
                </div>
                <div className="profileCard-upper" ref={upperCardRef}>
                    <div className='Profile-cardTitle'>
                        <h2>WebSite</h2>
                    </div>
                    <div className='Profile-cardContent'>
                        <div className="ProfileCard-imageContainer">
                            <img className='ProfileCard-image' src="data:image/jpeg;base64,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" alt=""/>
                        </div>
                        <div className="Profile-siteContentContainer">
                            <div className="first-container">
                                <div>
                                    <div className="eachCode-block dark-color"></div>
                                    <div className="eachCode-block light-color"></div>
                                    <div className="eachCode-block mid-color"></div>
                                    <div className="eachCode-block dark-color"></div>
                                    <div className="eachCode-block small-block"></div>
                                    <div className="eachCode-block small-block"></div>
                                    <div className="eachCode-block small-block"></div>
                                    <div className="eachCode-block small-block"></div>
                                </div>
                                <div>
                                    <div className="box"></div>
                                </div>
                            </div>
                            <div className="second-container">
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                            </div>
                            <div className=" third-container">
                                <div className="eachCode-block light-color full-width"></div>
                                <div className="eachCode-block dark-color full-width"></div>
                                <div className="eachCode-block mid-color full-width"></div>
                                <div className="eachCode-block mid-color full-width"></div>
                                <div className="eachCode-block small-block full-width"></div>
                                <div className="eachCode-block small-block full-width"></div>
                                <div className="eachCode-block small-block full-width"></div>
                                <div className="eachCode-block small-block full-width"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardSite
