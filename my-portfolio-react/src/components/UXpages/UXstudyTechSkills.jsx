import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UXstudyTechSkills({skillUsed, techUsed}) {
    return(
        <div className="UXstudyUsed">
            <div className="skillsUsed">
                <div className="UXWork_subtitle" style={{width: '100%', textAlign: 'center'}}>
                    <h3>Skills</h3>
                </div>
                <div className="skillUsed_list">
                    {skillUsed.map((skill, index) => (
                        <div key={index}>
                            <FontAwesomeIcon icon={skill.icon} className='skill_used_icon'/>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="techUsed">
                <div className="UXWork_subtitle" style={{width: '100%', textAlign: 'center'}}>
                    <h3>Tech</h3>
                </div>
                <div className="techUsed_list">
                    {techUsed.map((tech, index) => (
                        <div key={index}>
                            <img src={tech.image} alt="tech-photo" className='skill_used_image'/>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}