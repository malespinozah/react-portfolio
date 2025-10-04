import { faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function UXTag({children}) {
    return <span className="UXstudyTag">
        <FontAwesomeIcon icon={faTag} className="icon_UXstudyTag"/>
        {children}</span>
}