import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCircleArrowRight, faArrowUpFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function WDworkBoxList({wdworktitle, wdworkdescription, wdworkurl, wdworktags, wdimage}) {
    return(
        <div className="work_box_list_wd">
            <div>
                <div className='view_header_work'>
                    <h3>{wdworktitle}</h3>
                    <div className="work_tag_list_wd">
                       {wdworktags.map((tag, index) => (
                          <span key={index} className='work_tag_item'>
                               <FontAwesomeIcon icon={faTag} className='work_tag_icon_list'/> {tag}
                           </span>
                        ))}
                    </div>
                     <p>{wdworkdescription}</p>
                </div>
                <div className='view_link_list'>
                    <a href={wdworkurl} target="_blank" rel="noopener noreferrer"><span>Read More</span><FontAwesomeIcon icon={faCircleArrowRight} className='icon_read_more'/></a>
                </div>
            </div>
            <div>
                <div className="imag_nav_bar">
                    <div className="imag_nav_sec">
                        <div></div><div></div><div></div>
                    </div>
                    <div className="imag_nav_others">
                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>
                <img 
                src={wdimage} 
                alt="prototype view image" 
                className='work_image_wd'  />
            </div>
        </div>
    );
}