import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function Loblaws(){
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Optimization plan for enhancing UX
                        </div>
                        <UXTitle>Loblaws</UXTitle>
                        <UXTag>UX Research</UXTag>
                        <div className="study_small_description">
                            <p>After a redesign, Loblaws saw stable traffic but a decline in online purchases. This project explored opportunities to enhance the shopping experience. </p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Prototype tested", content: "Website & Mobile App", icon: faDesktop},
                            {title: "Collaborators", content: "1", icon: faUsers},
                            {title: "Duration", content: "90 days", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_loblaws_mockup.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            A collaborative research and optimization plan for the Loblaws website addressing a 17% decline in online purchases following a redesign. The project aimed to uncover friction points in the buy flow and propose data-driven solutions to improve usability, increase conversions, and rebuild customer trust.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research Skills</h4>
                            <ul>
                                <li><span>#</span>Heuristic_Evaluation</li>
                                <li><span>#</span>Competitive_Analysis</li>
                                <li><span>#</span>Data_Analysis_Planning</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>UX Design & Optimization Skills</h4>
                            <ul>
                                <li><span>#</span>Wireframing_Plan</li>
                                <li><span>#</span>Prototyping_Plan</li>
                                <li><span>#</span>Iterative_Testing_Mindset</li>
                                <li><span>#</span>Conversion-focused_Design</li>
                            </ul>
                        </div>
                        <div className="work_my_skills">
                            <h4>Profesional Skills</h4>
                            <ul>
                                <li><span>#</span>Stakeholder_Alignment</li>
                                <li><span>#</span>Critical_Problem_Solving</li>
                                <li><span>#</span>Team_Collaboration</li>
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
                            <h3>Identifying Interface Issues</h3>
                        </div>
                        <UXstudyBlockText>
                            The evaluation of the Loblaws online shopping experience uncovered several interface challenges that contributed to friction and cart abandonment. One of the most significant pain points was the "Add to Cart" interaction. The circular “+” button did not clearly communicate its purpose, leading to accidental clicks or uncertainty about whether items were successfully added. Once products were in the cart, editing them also proved difficult. The counter collapsed after adding, and there was no clear way to fully remove an item, as the absence of a familiar trash icon reduced users' sense of control.
                            <br/><br/>
                            Navigation and overall visibility were also problematic. The interface relied heavily on gray-on-gray panels with inconsistent submenus and unclear category hierarchies, which made product discovery confusing. At checkout, users faced an unnecessarily complex and fragmented process, with multiple steps to select delivery times, frequent pop-ups, and distracting promotions inserted just before completing a purchase. These interruptions disrupted focus and added unnecessary effort to a critical stage of the flow.
                            <br/><br/>
                            Additionally, the system suffered from inconsistencies in design and standards. Some menus behaved differently depending on whether users clicked or hovered, while certain messages—such as PC Express Pass prompts shown to logged-in customers—were irrelevant and confusing. Basic conditions of purchase were not communicated clearly, leading to frustration and hesitation. Finally, the app lacked strong feedback and user control mechanisms. Quantity updates were not prominent, error messages were poorly placed, and repeated SMS verification at each login slowed the process and discouraged repeat use.
                            <br/><br/>
                            Together, these issues highlighted serious gaps in clarity, efficiency, and trust. They not only created frustration but also undermined users' confidence in the platform, directly impacting conversion rates and customer satisfaction.
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
                            We analyzed the redesign's impact through competitive analysis (Metro, Walmart), heuristic evaluation, and proposed usability testing scenarios. Key activities included reviewing buy flow analytics, analyzing cart abandonment patterns, and simulating user interactions through defined test scenarios (e.g., searching for groceries, checking out with minimum order thresholds, and wishlist interactions). The plan incorporated A/B testing to evaluate design alternatives (e.g., improved add-to-cart button labeling, streamlined checkout steps, and clearer navigation).
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
                            The usability evaluation of the Loblaws online shopping platform <b>revealed how unclear interactions and inconsistent design patterns directly affect user trust and conversion</b>. Issues such as an ambiguous "Add to Cart" button, confusing cart editing controls, and a fragmented checkout process created unnecessary friction, while gray-on-gray navigation and irrelevant prompts reduced clarity and confidence during key shopping tasks. These findings explained the observed decline in online purchases and provided a clear roadmap for improvement.
                            <br/><br/>
                            <b>The study's key impact was the ability to transform these pain points into actionable optimization strategies</b>, including redesigning core cart interactions, simplifying checkout flows, and aligning navigation with established e-commerce standards. By connecting usability flaws to measurable business outcomes, the project demonstrated how UX research directly supports conversion goals and customer retention.
                            <br/><br/>
                            On a personal level, <b>this project strengthened my skills in evaluation, benchmarking, and optimization planning</b>. I learned how to be more critical of design flows that influence purchase decisions, how to prioritize improvements with the greatest impact on conversion rates and cart abandonment, and how to frame research insights in a way that resonates with both users and business stakeholders.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}