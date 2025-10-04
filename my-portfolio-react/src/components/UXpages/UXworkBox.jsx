import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTag } from '@fortawesome/free-solid-svg-icons';

export default function UXworkBox({uxworktitle, uxworktag, uxworkurl, uximageurlone, uximageurltwo}){
    return(
        <div className="work_box" style={{ backgroundImage: `url(${uximageurlone})`}}>
            <div className='work_content' style={{ backgroundImage: `url(${uximageurltwo})`}}>
                <div className="work_info">
                    <h3>{uxworktitle}</h3>
                    <span className="work_tag">
                        <FontAwesomeIcon icon={faTag} className='work_tag_icon'/> {uxworktag}
                    </span>
                    <a href={uxworkurl} className='work_link' target="_blank" rel="noopener noreferrer">
                       <span>
                        <FontAwesomeIcon icon={faLink}/> view work</span>
                       </a>
                </div>
            </div>
        </div>
    );
}