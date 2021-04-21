import React, {useState, useEffect} from 'react';
import ProfileSkills from '../ProfileSkills/ProfileSkills';
import ProfileCard from '../ProfileCard/ProfileCard';
import './Profile.scss';

function Profile() {
    let [textArray , changeArray] = useState([]);
    useEffect(() => {
        let length;
        let skills = ["Web-Developer", "Web-Designer", "React-Developer"];
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(() => resolve(), ms))
        }
        const changeInputText = async () => {
            changeArray([]);
            for (let i = 0; i<skills.length;i++) {
                let newFullText = skills[i]
                for (let j = 0; j<newFullText.length;j++) {
                    await sleep(100)
                    changeArray(PreviousArray => {
                        length = PreviousArray.length + 1;
                        return [...PreviousArray, newFullText[j]];
                    })
                }
                await sleep(1200)
                while(length !== 0) {
                    await sleep(30);
                    changeArray(PreviousArray => {
                        PreviousArray.pop();
                        length = PreviousArray.length;
                        return [...PreviousArray];
                    })
                }
            }
            await changeInputText()
        }
        changeInputText();
    }, [])


    return (
        <section id='Profile'>
            <div className='profileContainer'>
                <div className="container1 profileFlex">
                    <div className="profileIntro">
                        <div className="introLine">
                            <h2><span className='firstLetter'>H</span>ey, I am <span className='userName'>Sarthak Gupta</span>!</h2>
                        </div>
                        <div className="introSkills">
                            <h2>I Work As A</h2>
                            <div>
                                <ProfileSkills textArray={textArray}/><span className='blinkingBar'>|</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container2 profileFlex">
                    <ProfileCard/>
                </div>
            </div>
        </section>
    )
}



export default Profile
