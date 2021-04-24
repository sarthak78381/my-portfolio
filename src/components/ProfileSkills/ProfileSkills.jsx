import React, {useState, useEffect} from 'react';
import './ProfileSkills.scss';

function ProfileSkills() {
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
    return <div className='Profile-skillsContainer'>
        {
            textArray.map((text,index) => (
                <span key={index} className='bouncingText'>{text}</span>     
            ))
        }
    </div>
}

export default ProfileSkills;
