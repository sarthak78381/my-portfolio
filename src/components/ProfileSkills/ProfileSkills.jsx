import React from 'react';
import './ProfileSkills.scss';

function ProfileSkills({textArray}) {
    textArray.length > 20 && console.log(textArray)
    return <div className='Profile-skillsContainer'>
        {
            textArray.map((text,index) => (
                <span key={index} className='bouncingText'>{text}</span>     
            ))
        }
    </div>
}

export default ProfileSkills;
