import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function Freshii(){
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Testing usability & prototyping
                        </div>
                        <UXTitle>Freshii Website & App</UXTitle>
                        <UXTag>Usability Test</UXTag>
                        <div className="study_small_description">
                            <p>Usability issues in the Freshii app impact the ordering experience. Redesigning these flows enables a more intuitive, enjoyable, and efficient interaction for users. </p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Platform tested", content: "Mobile App", icon: faDesktop},
                            {title: "Testers", content: "6", icon: faUsers},
                            {title: "Duration", content: "Ongoing", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_iphone_freshii.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This project originated as a group assignment in the <b>Usability Testing course</b> at Humber College, where our team conducted a usability study of the Freshii mobile app. The study focused on evaluating the interface and user experience, identifying issues in navigation, customization flows, and overall task efficiency. Using task-based testing and qualitative feedback, the evaluation revealed opportunities to improve menu browsing, order customization, and checkout clarity. While the course deliverable was a final report, I decided to continue the project independently. <b>I am currently developing prototypes for both mobile and desktop</b>, applying the study's recommendations and exploring how a consistent, cross-platform design could better support users in ordering meals efficiently and with greater confidence.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research Skills</h4>
                            <ul>
                                <li><span>#</span>Heuristic_Evaluation</li>
                                <li><span>#</span>Usability_Testing</li>
                                <li><span>#</span>Data_Analysis</li>
                                <li><span>#</span>Test_Planning</li>
                              </ul>         
                        </div>
                        <div className="work_my_skills">
                            <h4>UX/IU Design Skills</h4>
                            <ul>
                                <li><span>#</span>Task_Flow_Design</li>
                                <li><span>#</span>Wireframes_Med_High</li>
                                <li><span>#</span>Website_Prototyping</li>
                                <li><span>#</span>Mobile_Prototyping</li>
                              </ul>         
                        </div>
                        <div className="work_my_skills">
                            <h4>Professional Skills</h4>
                            <ul>
                                <li><span>#</span>Critical_Design_Thinking</li>
                                <li><span>#</span>User_Empathy</li>
                                <li><span>#</span>Iterative_Mindset</li>
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
                            The usability evaluation of the Freshii app revealed several interface challenges that disrupted the ordering experience. Users encountered confusion when tapping the “Order” button, which unexpectedly led to location selection instead of the menu, breaking flow and creating uncertainty for first-time users. The presence of duplicate nutrition warnings also added redundancy and visual clutter, slowing down the process rather than supporting decision-making. Customization and quantity controls were another source of friction, with overlapping and poorly placed selectors, absense of real-time feedback, and limited flexibility when editing items in the cart or adjusting duplicates. In addition, store-related information was difficult to access, as business hours were hidden behind a small “i” icon, while the checkout screen displayed a pickup location that appeared interactive but was not, forcing users to backtrack through earlier steps. Collectively, <b>these issues highlighted gaps in clarity, efficiency, and user control</b> —key areas addressed in the recommendations and now being explored further in my ongoing prototypes.

                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Usability Testing</h3>
                        </div>
                        <UXstudyBlockText>
                            To evaluate the Freshii app, we designed and executed a structured usability testing plan focused on identifying key pain points in the food-ordering experience. Building on insights from our heuristic evaluation, we defined five core task scenarios that represented the most common and critical user goals: ordering a food item, adding duplicates, editing customized items, finding store hours, and switching pickup locations. These tasks directly addressed severe heuristic violations, such as unclear navigation, hidden information, and limited user control.
                            <br/><br/>
                            We recruited six participants who regularly use food delivery apps and conducted moderated task-based sessions. Each participant was guided through the scenarios while thinking aloud, allowing us to capture both their behaviors and reflections. Data was collected through observation, completion rates, time on task, and post-task questionnaires. Supporting materials—including a screener survey, moderator script, consent form, and note-taking templates—ensured consistency and ethical practices throughout the sessions.
                            <br/><br/>
                            This process allowed us to gather both <b>qualitative insights</b> (frustrations, expectations, and feedback) and <b>quantitative measures</b> (success rates, task difficulty, and completion times), which together provided a comprehensive picture of the Freshii app's usability challenges. The findings became the foundation for actionable recommendations, now being translated into cross-platform prototypes for both mobile and desktop experiences.
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
                            The usability study of the Freshii app revealed significant opportunities to improve clarity, efficiency, and user control. <b>With an average SUS score of 52.08</b>, the evaluation showed that the app falls below industry usability standards, highlighting issues such as lack of a search feature, small font sizes, confusing customization flows, and an overemphasis on promotions instead of food options . These findings provided a data-driven foundation for actionable recommendations, including prioritizing food content on the home screen, integrating a search function, enlarging typography, and improving cart editing capabilities.
                            <br/><br/>
                            On a personal level, <b>this project taught me to be more critical of design complexity</b>, especially when menus involve customization with multiple ingredients. I learned how important it is to recognize the frustrations that push users away from an app, and how to translate those into practical improvements. It also strengthened my ability to design with greater attention to task flows, ensuring that the ordering journey feels intuitive and supportive rather than confusing. Beyond the final report, <b>I am now independently developing cross-platform prototypes for both mobile and desktop</b>. These prototypes build on the study’s recommendations, allowing me to explore design solutions that make the Freshii digital experience more intuitive, accessible, and aligned with customer needs.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}