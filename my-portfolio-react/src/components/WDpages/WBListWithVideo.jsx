import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function WDBoxListVideo({wdworktitle, wdworkdescription, wdworkurl, wdworktags, wdvideo}) {
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
                <video 
                src={wdvideo} 
                alt="prototype view" 
                className='work_video_wd' 
                controls
                controlsList='nodownload noplaybackrate'
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}