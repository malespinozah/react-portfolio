import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function LocalsToronto() {
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Building a Digital Platform for Toronto BIAs
                        </div>
                        <UXTitle>Locals Toronto App</UXTitle>
                        <UXTag>Interaction Design Studio </UXTag>
                        <div className="study_small_description">
                            <p>A community-focused platform designed to connect Toronto residents with local businesses, events, and neighborhoods.</p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Prototype tested", content: "Mobile App", icon: faDesktop},
                            {title: "Collaborators", content: "5", icon: faUsers},
                            {title: "Duration", content: "7 weeks", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/locals_toronto.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This collaborative project was developed as part of the <b>IXD Studio course</b>, in collaboration with <b>Toronto's Business Improvement Areas (BIAs)</b>, which are local business associations that work together to improve economic vitality and community engagement within a defined neighbourhood. Their objectives include promoting local shops, enhancing public spaces, and organising events that attract residents and visitors.
                            The challenge was to design a digital platform that would strengthen the connection between residents, businesses, and neighbourhoods. Our solution — the Locals Toronto App — provides users with tools to <b>discover</b> nearby shops, cafes, and local services, <b>explore</b> upcoming community events, and <b>support</b> small businesses by improving their online visibility.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research Skills</h4>
                            <ul>
                                <li><span>#</span>User_Personas</li>
                                <li><span>#</span>User_Scenarios</li>
                                <li><span>#</span>Journey_Mapping</li>
                                <li><span>#</span>Userflow</li>
                                <li><span>#</span>Problem_Framing</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>UX Design Skills</h4>
                            <ul>
                                <li><span>#</span>Wireframing</li>
                                <li><span>#</span>Style_Guide_Development</li>
                                <li><span>#</span>Prototyping_Low_Med_High</li>
                                <li><span>#</span>Interaction_Design</li>
                                <li><span>#</span>Usability_Testing</li>
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
                            Through user research, personas, and journey mapping, we uncovered diverse needs within the community. Small business owners sought ways to <b>strengthen</b> their online presence and attract more customers, while young professionals were primarily interested in <b>finding</b> reliable information about unique products and local shops. Families, on the other hand, <b>valued</b> convenience and the opportunity to engage in community-focused events that fit their busy schedules.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_work_details"/>
                            </div>
                            <h3>Research & Insights</h3>
                        </div>
                        <UXstudyBlockText>
                            The research phase began with the creation of <b>user personas and scenarios</b> to represent the primary target groups. A moodboard helped establish the project's visual direction, focusing on themes of trust, accessibility, and community connection. Mapping the <b>user flow</b> revealed how people would interact with the app—from discovering local businesses to exploring events and catalogs—highlighting opportunities to simplify navigation and ensure accessibility. These insights shaped the foundation of the design strategy.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Wireframing & Prototyping</h3>
                        </div>
                        <UXstudyBlockText>
                            We explored multiple design directions through <b>sketches and low-fidelity wireframes</b>, iterating collaboratively to test different layouts. This process advanced into high-fidelity prototypes built in Figma, where we refined interactions such as event discovery, store details, and neighborhood filtering. A style guide was also created to maintain consistency across typography, colors, icons, and components, ensuring the interface felt both professional and approachable.
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
                            The project demonstrated how a community-focused platform could empower Toronto's Business Improvement Areas (BIAs) to enhance visibility for small businesses while enriching the user experience for residents. By combining research-driven insights with thoughtful design, we created a solution that made <b>local shops and events more discoverable</b>, built trust through a consistent interface, and encouraged stronger connections within neighborhoods.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}