import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function WDworkBoxList({wdworktitle, wdworkdescription, wdworkurl, wdworktags, wdimage}) {
    return(
        <div className="work_box_list_wd">
            <div>
                <div className='view_header_work'>
                    <h3>{wdworktitle}</h3>
                    <div className="work_tag_list">
                       {wdworktags.map((tag, index) => (
                          <span key={index} className='work_tag_item'>
                               <FontAwesomeIcon icon={faTag} className='work_tag_icon_list'/> {tag}
                           </span>
                        ))}
                    </div>
                     <p>{wdworkdescription}</p>
                </div>
                <a href={wdworkurl} className='view_link_list' target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
            <div>
                <img 
                src={wdimage} 
                alt="prototype view image" 
                className='work_image_wd'  />
            </div>
        </div>
    );
}