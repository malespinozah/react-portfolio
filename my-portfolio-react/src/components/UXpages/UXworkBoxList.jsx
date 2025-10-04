import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';

export default function UXworkBoxList({uxworktitle, uxworktags, uxworkdescription, uxworkurl, uximageurl}){
    return(
        <div className="work_box_list_ux">
            <div>
                <img 
                src={uximageurl} 
                alt="prototype view" 
                className='work_image_ux'/>
            </div>
            <div className='view_info_work'>
                <h3>{uxworktitle}</h3>
                <p>{uxworkdescription}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div className="work_tag_list">
                    {(uxworktags || []).map((tag, index) => (
                        <span key={index} className='work_tag_item'>
                            <FontAwesomeIcon icon={faTag} className='work_tag_icon_list'/> {tag} 
                        </span>
                    ))}
                    </div>
                <div className='go_to_study'>
                    <a href={uxworkurl} target="_blank" rel="noopener noreferrer"><span>Read more</span><FontAwesomeIcon icon={faCircleArrowRight} className='icon_read_more'/></a>
                </div>
                </div>
            </div>
        </div>
    );
}