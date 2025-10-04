import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function MMartinos(){
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Restaurant application and website
                        </div>
                        <UXTitle>Mamma Martino's</UXTitle>
                        <UXTag>UI/UX Design</UXTag>
                        <div className="study_small_description">
                            <p>Mamma Martino's is an Italian restaurant seeking to improve the customer experience by introducing delivery and pickup services. </p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Individual", icon: faBriefcase},
                            {title: "Prototype tested", content: "Website & Mobile App", icon: faDesktop},
                            {title: "Testers", content: "20", icon: faUsers},
                            {title: "Duration", content: "Ongoing", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_iphone_mm.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This project was initially developed during the <b>Information Architecture course</b> at Humber College, focusing on improving content distribution and designing a modern interface for Mamma Martino's, including the addition of pickup and delivery order services. After the course, I continued to refine the project, and <b>I am currently developing</b> more advanced wireframes and prototypes to elevate the redesign to a professional level. The goal is to transform an outdated, static website into a responsive, user-friendly platform aligned with customer expectations. The project deliverables include desktop and mobile user flows, task flows, a UI style guide, and a mobile app prototype.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research & Analysis Skills</h4>
                            <ul>
                                <li><span>#</span>Information_Architecture</li>
                                <li><span>#</span>Task_Flows</li>
                                <li><span>#</span>User_Flows</li>
                                <li><span>#</span>Usability_Evaluation</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>UI/UX Design Skills</h4>
                            <ul>
                                <li><span>#</span>Wireframes_Low_Med_High</li>
                                <li><span>#</span>Website_Prototyping</li>
                                <li><span>#</span>Mobile_Prototyping</li>
                                <li><span>#</span>UI_Style_Guide</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>Professional Skills</h4>
                            <ul>
                                <li><span>#</span>Iterative_Design_Process</li>
                                <li><span>#</span>Problem_Solving</li>
                                <li><span>#</span>Independent_Initiative</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work_details">
                <div className="work_details_wrapper">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                                <FontAwesomeIcon icon={faUsersViewfinder} className="icon_work_details"/>
                            </div>
                            <h3>Identifying Needs</h3>
                        </div>
                        <UXstudyBlockText>
                            Customers increasingly expect restaurants to offer seamless online ordering for pickup and delivery. At the time, Mamma Martino's digital presence was focused on providing static menu information, with opportunities to enhance navigation, update UI patterns, and introduce a mobile-first experience.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Sketching, Wireframing & Prototyping</h3>
                        </div>
                        <UXstudyBlockText>
                            As part of the redesign process, a <b>competitor benchmarking</b> was conducted by studying platforms such as Domino's, Uber Eats, and Pizza Hut. This analysis helped identify best practices for menu navigation, order checkout, and delivery services, providing a foundation for modernizing Mamma Martino's digital experience.<br/><br/>
                            To structure the <b>customer journey</b>, I designed detailed user flows and task flows for both desktop and mobile users. These flows covered essential tasks such as browsing the menu, customizing meals, selecting pickup or delivery, and completing the checkout process.<br/><br/>
                            Then, I developed a UI style guide defining typography, color palette, iconography, and button states. This ensures a consistent appearance across all screens and provides a strong foundation for scalable design.<br/><br/>
                            Building on this framework, I created a desktop and mobile app prototype in <b>Figma</b>, featuring simplified navigation, improved menu layouts, strong imagery, and streamlined checkout steps.
                            Finally, I'm currently applying an iterative approach, <b>refining the prototype</b> after the initial delivery to address issues from early group work and better align the design with modern standards.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                                <FontAwesomeIcon icon={faHandSparkles} className="icon_work_details"/>
                            </div>
                            <h3>Key Impact</h3>
                        </div>
                        <UXstudyBlockText>
                            The redesign showed that <b>well-considered UX decisions can directly improve usability and conversion rates</b>. One of the most valuable insights from peer feedback was the importance of offering a guest checkout option instead of requiring users to log in. This adjustment significantly streamlined the ordering process and reduced friction for new customer. Another valuable takeaway was clarifying when the delivery or pickup option should be selected, ensuring users make this choice at the right stage before proceeding with their order.
                            <br/><br/>
                            On a personal level, <b>this project strengthened my ability to design a cohesive cross-platform system</b>. I learned how to create flows, wireframes, and prototypes that worked seamlessly on both desktop and mobile, while also considering the specific needs of the brand. This experience helped me translate business goals into user-centered features that improved both functionality and customer satisfaction.

                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}