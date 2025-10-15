import { faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function WDTag({children}) {
    return <span className="WDstudyTag">
        <FontAwesomeIcon icon={faTag} className="icon_WDstudyTag"/>
        {children}</span>
}