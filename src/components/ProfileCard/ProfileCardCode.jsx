import React, {useEffect, useRef} from 'react';
import './ProfileCard.scss'

function ProfileCardCode({handleMove, handleGetIntoNormalPos, cardRef, upperCardRef, isRunBtnClicked, parentCardRef}) {
    let blockRef = useRef(null);
    useEffect(() => {
        let blocksOfCode = document.querySelectorAll('.eachCode-blocks');
        let delay = .1;
        Object.values(blocksOfCode).map(code => {
            blockRef.current = code;
            blockRef.current.style.animation = `animateCodeBlock .5s ${delay}s forwards ease`;
            delay += .1;
        })
    }, []);
    return (
        <div className='Profile-cardParent' onMouseMove={handleMove} onMouseLeave = {handleGetIntoNormalPos} ref={parentCardRef} onTouchMove = {(e) => {
            let ev = {
                pageX: e.targetTouches[0].pageX,
                pageY: e.targetTouches[0].pageY,
            }
            handleMove(ev);
        }} onTouchEnd={handleGetIntoNormalPos}>
            <div className="Profile-cardChild">
                <div className="profileCard-lower" ref={cardRef}>
                </div>
                <div className="profileCard-upper" ref={upperCardRef}>
                    <div className='Profile-cardTitle'>
                        <h2>code</h2>
                    </div>
                    <div className='Profile-cardContent'>
                        <div className="firstCode">
                            <div className="codeBlocks pad-10">
                                <div className="eachCode-blocks medium dark-color"></div>
                                <div className="eachCode-blocks small light-color"></div>
                                <div className="eachCode-blocks large mid-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks large light-color"></div>
                                <div className="eachCode-blocks medium dark-color"></div>
                                <div className="eachCode-blocks small mid-color"></div>
                            </div>
                            <div className="codeBlocks pad-80">
                                <div className="eachCode-blocks medium mid-color"></div>
                                <div className="eachCode-blocks large light-color"></div>
                                <div className="eachCode-blocks small dark-color"></div>
                            </div>
                            <div className="codeBlocks pad-80">
                                <div className="eachCode-blocks large light-color"></div>
                                <div className="eachCode-blocks medium mid-color"></div>
                                <div className="eachCode-blocks small dark-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks medium mid-color"></div>
                                <div className="eachCode-blocks large dark-color"></div>
                                <div className="eachCode-blocks small light-color"></div>
                            </div>
                            <div className="codeBlocks pad-10">
                                <div className="eachCode-blocks large mid-color"></div>
                                <div className="eachCode-blocks medium dark-color"></div>
                                <div className="eachCode-blocks small light-color"></div>
                            </div>
                        </div>
                        <div className="secondCode">
                            <div className="codeBlocks pad-10">
                                <div className="eachCode-blocks medium dark-color"></div>
                                <div className="eachCode-blocks small light-color"></div>
                                <div className="eachCode-blocks large mid-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks large light-color"></div>
                                <div className="eachCode-blocks small mid-color"></div>
                                <div className="eachCode-blocks medium dark-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks small dark-color"></div>
                                <div className="eachCode-blocks large mid-color"></div>
                                <div className="eachCode-blocks medium light-color"></div>
                            </div>
                            <div className="codeBlocks pad-80">
                                <div className="eachCode-blocks medium light-color"></div>
                                <div className="eachCode-blocks small dark-color"></div>
                                <div className="eachCode-blocks large mid-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks small light-color"></div>
                                <div className="eachCode-blocks medium mid-color"></div>
                                <div className="eachCode-blocks large dark-color"></div>
                            </div>
                            <div className="codeBlocks pad-50">
                                <div className="eachCode-blocks large dark-color"></div>
                                <div className="eachCode-blocks small light-color"></div>
                                <div className="eachCode-blocks medium mid-color"></div>
                            </div>
                            <div className="codeBlocks pad-10">
                                <div className="eachCode-blocks small light-color"></div>
                                <div className="eachCode-blocks large mid-color"></div>
                                <div className="eachCode-blocks medium dark-color"></div>
                            </div>
                        </div>
                        <div className="run-buttonContainer">
                            <button onClick={() => isRunBtnClicked(true)}>Run</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardCode
