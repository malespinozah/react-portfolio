import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UXstudyInfo({infoItems}) {
    return(
        <div className="UXstudyInfo">
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
                <defs>
                    <linearGradient id="faGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9F00F5" />
                    <stop offset="100%" stopColor="#FF7AD7" />
                    </linearGradient>
                </defs>
            </svg>

            {infoItems.map((item, index) =>(
                <div className="info_item" key={index}>
                    <h3>{item.title}</h3>
                    <div>{item.content}<span className="info_icons"><FontAwesomeIcon icon={item.icon}/></span></div>
                </div>
            ))}
        </div>
    );
}