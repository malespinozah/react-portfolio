import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UXstudyQuickInfo({infoItems}) {
    return(
        <div className="UXstudyQuickInfo">
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
                    <div><span className="info_icons"><FontAwesomeIcon icon={item.icon}/></span>{item.content}</div>
                </div>
            ))}
        </div>
    );
}