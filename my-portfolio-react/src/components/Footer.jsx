import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faX} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    // JS comment
    return(
        <footer id="footer">
            <section className='banner-footer'>
                <h2>Ideas which become true</h2>
                <div className="media_list">
                    <a href="https://www.linkedin.com/in/malespinozah/" className='link_media'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='link_media_icon'/>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/malespinozah" className='link_media'>
                        <FontAwesomeIcon icon={faGithub} className='link_media_icon'/>
                        <span>GitHub</span>
                    </a>
                    <a href="https://x.com/malespinozah" className='link_media'>
                        <FontAwesomeIcon icon={faXTwitter} className='link_media_icon'/>
                        <span>X-Twitter</span>
                    </a>
                    <a href="https://discord.gg/McYvQ8TT" className='link_media'>
                        <FontAwesomeIcon icon={faDiscord} className='link_media_icon'/>
                        <span>Discord</span>
                    </a>
                </div>
                <div className='media_link_nav'>
                    <a href="/UXDesign/List">
                        <FontAwesomeIcon icon={faChevronRight} className='media_link_icon'/> UX Design Projects
                        </a>
                    <a href="/WebDevelopment/List">
                        <FontAwesomeIcon icon={faChevronRight} className='media_link_icon'/> Web Development Projects
                        </a>
                </div>
            </section>
            <section className="copyright">
                <span>
                    Copyright &copy; Maria Alejandra Espinoza Huamaní, 2025. 
                </span>
                <img src="/images/cherry.png" alt="flower" />
                <span>All rights reserved.</span>
            </section>
        </footer>
    )
}