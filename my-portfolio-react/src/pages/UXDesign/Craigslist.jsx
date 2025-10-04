import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function CraigslistWork(){    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Enhancing IA & prototyping
                        </div>
                        <UXTitle>Craigslist Website & App</UXTitle>
                        <UXTag>Usabiliy Test</UXTag>
                        <div className="study_small_description">
                            <p>Craigslist faces usability challenges that impact user experience. Optimising navigation and information architecture will create a trustworthy and more intuitive interface.
                            </p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Platform tested", content: "Website", icon: faDesktop},
                            {title: "Participants", content: "4", icon: faUsers},
                            {title: "Duration", content: "Ongoing", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_iphone_craigslist.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This collaborative project originated in the <b>Usability Testing course</b> at Humber College, where I conducted a usability study to evaluate Craigslist's user experience. The research focused on assessing how easily users could navigate the platform, complete essential tasks, and understand system functionalities. Through task-based testing and qualitative feedback, the study uncovered several areas where the platform fell short of modern usability standards and identified opportunities to strengthen trust, navigation, and overall experience. Building on the findings from the final report, <b>I am currently developing prototypes</b> that apply the recommendations, transforming the insights into actionable design solutions.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research Skills</h4>
                            <ul>
                                <li><span>#</span>Heuristic_Evaluation</li>
                                <li><span>#</span>Usability_Testing</li>
                                <li><span>#</span>Test_Plan_Development</li>
                                <li><span>#</span>Data_Analysis</li>
                              </ul>         
                        </div>
                        <div className="work_my_skills">
                            <h4>UX Design Skills</h4>
                            <ul>
                                <li><span>#</span>Information_Architecture</li>
                                <li><span>#</span>Interaction_Design</li>
                                <li><span>#</span>Wireframes_Med_High</li>
                                <li><span>#</span>Website_Prototyping</li>
                                <li><span>#</span>Mobile_Prototyping</li>
                              </ul>         
                        </div>
                        <div className="work_my_skills">
                            <h4>Profesional Skills</h4>
                            <ul>
                                <li><span>#</span>Iterative_Process</li>
                                <li><span>#</span>Critical_Thinking</li>
                                <li><span>#</span>Communication</li>
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
                            <h3>Identifying Interface Issues</h3>
                        </div>
                        <UXstudyBlockText>
                            The usability test revealed several interface challenges across Craigslist's core flows. <b>Navigation was a major pain point</b>, as users struggled with redundant categories, unclear labels, and a navigation bar that doubled as both a filter and a location indicator, leading to confusion. <b>Visual design inconsistencies</b> also impacted the experience, with images that did not fit their spaces, prices and details like square footage often hidden or poorly emphasized, and maps that varied in format or lacked interactivity. In the jobs and listings sections, <b>excessive subcategories</b>, ambiguous terminology, and excessively long or duplicated posts reduced clarity and trust, while key details such as posting dates and application actions were not prioritized. 
                            <br/><br/>
                            Finally, <b>the posting process presented opportunities</b> for clearer guidance and structure, with buttons in unusual locations, unclear terminology like “acct,” inconsistent fee information, and preview pages that failed to indicate whether ads were finalized. These issues collectively highlight a need for clearer navigation structures, consistent design standards, and more intuitive communication patterns to improve usability and user confidence.
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Usability Testing: Project Process</h3>
                        </div>
                        <UXstudyBlockText>
                            We began with a heuristic evaluation based on <b>Nielsen's 10 usability principles</b>, identifying potential issues across navigation, labeling, and interface consistency. These insights informed the development of a usability test plan, which outlined team roles, participant recruitment, task scenarios, questionnaires, and the analysis workflow.
                            <br/><br/>
                            In the <b>testing phase</b>, participants were asked to complete essential tasks such as posting an item, searching for jobs, contacting advertisers, and creating job listings. Data was collected through both direct observation and post-test questionnaires, combining qualitative feedback (observations, comments, heuristic insights) with quantitative measures (task success rates, completion times, and System Usability Scale scores).
                            <br/><br/>
                            The results highlighted severe usability issues, with an <b>average SUS score of 23.75</b>, significantly below the industry benchmark of 68. During analysis and synthesis, the team consolidated findings into key themes, prioritizing issues that most affected user trust, navigation efficiency, and clarity.
                            <br/><br/>
                            Finally, we presented a comprehensive report with recommendations to stakeholders, supported by both evidence and actionable design solutions. This iterative, research-driven process not only revealed critical usability gaps but also laid the foundation for future design improvements, including <b>prototypes I am currently developing</b> to address the most pressing challenges
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
                            The study provided clear evidence of how Craigslist's current design could evolve to better meet user needs. With an average SUS score well below the industry benchmark of 68, <b>the evaluation highlighted critical usability opportunities</b>. These included the need for clearer navigation controls, greater trust in job postings, more effective search filters, and modern features such as integrated chat and interactive maps.s.
                            <br/><br/>
                            On a personal level, <b>this project strengthened my skills in end-to-end usability testing</b>, from heuristic evaluation to test planning, facilitation, and data analysis. While prototypes are currently being developed based on these insights, the process demonstrated the value of evidence-driven design and set the foundation for iterative improvements that will better align the platform with user expectations.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}
