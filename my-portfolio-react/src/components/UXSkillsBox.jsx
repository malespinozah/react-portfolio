import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UXskillsBox({ fontAicon, skillTitle, skillText }) {
    return(
        <div className="skill_box">
            <div className='skill_title'>
                <div className="icon_box">
                    <FontAwesomeIcon icon={fontAicon} fixedWidth className='skill_icon'/>
                </div>
                <h3>{skillTitle}</h3>
            </div>
            <div className='skill_info'>
                <p>{skillText}</p>
            </div>
        </div>
    );
}