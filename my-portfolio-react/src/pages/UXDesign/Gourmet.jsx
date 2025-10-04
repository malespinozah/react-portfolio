import { faBriefcase, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles, faStore, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function Gourmet() {
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Service Design for a restaurant
                        </div>
                        <UXTitle>Gourmet Express</UXTitle>
                        <UXTag>UX Research</UXTag>
                        <div className="study_small_description">
                            <p>A service design project focused on identifying operational opportunities and improving both staff workflows and customer experiences. </p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Place evaluated", content: "In-site", icon: faStore},
                            {title: "Collaborators", content: "4", icon: faUsers},
                            {title: "Duration", content: "14 weeks", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_gourmet_mockup.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This project was part of <b>the Service Design course</b> at Humber College, where our team conducted in-depth research on Gourmet Express, a small campus store operated by student staff and culinary programs. Through site visits, stakeholder interviews, and observational research, <b>we uncovered critical challenges</b> affecting storage, menu visibility, checkout efficiency, and communication around sustainability policies.
                            Using tools such as stakeholder maps, personas, journey maps, and a service blueprint, we analyzed the service from multiple perspectives—manager, employee, and customer. Finally, <b>we developed service concepts</b> aimed at creating simple, cost-effective improvements, such as borrowing fridge space from the Humber Room, moving label printing closer to the store, introducing a weekly menu board, clarifying the container policy, and advocating for dedicated repair budgets.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>Research & Fieldwork</h4>
                            <ul>
                                <li><span>#</span>Site_Visits</li>
                                <li><span>#</span>Service_Audits</li>
                                <li><span>#</span>Observational_Research</li>
                                <li><span>#</span>Service_Blueprinting</li>
                                <li><span>#</span>Data_Analysis</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>Ideation & Prototyping</h4>
                            <ul>
                                <li><span>#</span>Problem_Framing</li>
                                <li><span>#</span>Prototyping_Solutions</li>
                                <li><span>#</span>Scenario_Testing</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>Professional & Strategic Skills</h4>
                            <ul>
                                <li><span>#</span>Collaboration</li>
                                <li><span>#</span>Critical_Thinking</li>
                                <li><span>#</span>Service_Design_Mindset</li>
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
                            The research revealed that <b>most of the challenges</b> at Gourmet Express occur <b>in the backstage and support processes</b>. A major issue is limited storage space, which restricts inventory management and creates difficulties for staff working in tight areas. The label printing process also proved inefficient, since the manager must walk across campus multiple times a day to print labels, wasting valuable time and energy.
                            <br/><br/>
                            From a customer perspective, there is no fixed menu, meaning students don't know what will be available until they enter the store. This creates uncertainty and occasional overcrowding, considering that the <b>space of the store is narrow</b>. The container charge policy ($0.50 for reusable packaging) often confuses customers, as the reasoning process are not clearly communicated. At checkout, having only one working POS system causes delays during peak hours, while equipment like microwaves and coffee machines are prone to breakdowns, with <b>repair costs unfairly</b> coming out of the manager's limited budget. 
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Process</h3>
                        </div>
                        <UXstudyBlockText>
                            The research process for Gourmet Express followed a structured service design approach. We began with field research and <b>site visits</b>, observing daily operations, store layout, and interactions between staff and customers. These observations were complemented by interviews with the store manager and employees, giving us a clearer view of both <b>operational challenges</b> and <b>user frustrations.</b>
                            <br/><br/>
                            Next, we synthesized our <b>findings</b> through stakeholder mapping, personas, and journey maps, which allowed us to <b>capture multiple perspectives</b> —including the manager balancing operational constraints, the employees handling frontline service, and the students navigating the store as customers. This step was essential for identifying not only individual pain points but also how these roles interconnected across the service ecosystem.
                            <br/><br/>
                            We then created a <b>service blueprint</b>, mapping the frontstage and backstage processes as well as support functions. This revealed systemic inefficiencies such as limited storage, distant label printing, and maintenance issues that went unnoticed from a customer-facing perspective. With these insights in place, we moved into ideation and prototyping, developing and testing <b>low-cost solutions</b> —like borrowing fridge space, adding weekly menu boards, and clarifying container policies— to assess feasibility and potential impact. Finally, all findings and recommendations were consolidated into a final report, which outlined both immediate improvements and long-term strategies for sustaining the service.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faLightbulb} className="icon_work_details"/>
                            </div>
                            <h3>Key Insights</h3>
                        </div>
                        <UXstudyBlockText>
                            The study revealed that many of the most pressing issues at Gourmet Express stemmed from <b>backstage inefficiencies that indirectly affected customer experience</b>. For instance, limited storage and distant label printing not only slowed down staff but also contributed to delays and inconsistencies in service. From the customer side, the absence of a fixed menu led to uncertainty, overcrowding, and a sense of frustration during busy hours.
                            <br/><br/>
                            Another important insight was <b>the role of communication and transparency</b>. Customers were frequently confused about the $0.50 reusable container charge, which employees had to explain repeatedly. This highlighted the importance of clear policy communication, as even small misunderstandings could undermine trust. Similarly, infrastructure issues —such as having only one working checkout system and frequent equipment breakdowns— showed how fragile service reliability was when maintenance lacked proper support.
                            <br/><br/>
                            Overall, <b>the project demonstrated that small, low-cost interventions could significantly improve the service</b>. Simple solutions like introducing a weekly menu board, using nearby storage, or clearer signage around container policies had the potential to ease operational pressures and create a more seamless, transparent, and student-friendly experience.
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
                            The Gourmet Express project <b>demonstrated how service design can uncover systemic issues</b> that go beyond the user interface, addressing operational, communication, and sustainability challenges. Our recommendations provided the store with practical, cost-effective improvements that could be implemented immediately, while also highlighting long-term strategies such as dedicated maintenance budgets and improved institutional support.
                            <br/><br/>  
                            On a personal level, <b>this project deepened my abilities</b> to analyze complex service ecosystems, map multi-stakeholder experiences, and design evidence-based interventions that balance business feasibility with user needs. It also taught me to approach design critically—recognizing how small inefficiencies (like unclear menus or hidden fees) can escalate into barriers that affect both customer trust and organizational sustainability.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}