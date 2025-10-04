export default function SkillsTools({ toolImage, toolAlt, toolName, toolLevelB, toolLevelI, toolLevelA }){
    return(
        <div className='skills-item'>
            <div className="skills-img">
                <img src={toolImage} alt={toolAlt} />
            </div>
            <div className="skills-name">
                <h3>{toolName}</h3>
            </div>
            <div className="skills-level">
                <span style={{ background: toolLevelB}}></span>
                <span style={{ background: toolLevelI}}></span>
                <span style={{ background: toolLevelA}}></span>
            </div>
        </div>
    );
}