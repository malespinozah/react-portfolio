import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UXstudyBlockText from "../../components/UXpages/UXstudyBlockText";
import UXstudyQuickInfo from "../../components/UXpages/UXstudyQuickInfo";
import UXTag from "../../components/UXpages/UXtag";
import UXTitle from "../../components/UXpages/UXtitle";

export default function LAFitness(){
    return(
        <main id="main">
            <section className="wrap_work">
                <div className="wrapper_showinfo">
                    <div className="columns-left">
                        <div className="sub-title">
                            Enhancing interface and user experience
                        </div>
                        <UXTitle>LAFitness Website</UXTitle>
                        <UXTag>Interview Research</UXTag>
                        <div className="study_small_description">
                            <p>Redesigning LA Fitness to simplify trial sign-ups, enhance digital features, and foster a stronger sense of community.</p>
                        </div>
                        <UXstudyQuickInfo
                        infoItems={[
                            {title: "Work Type", content: "Collaborative", icon: faBriefcase},
                            {title: "Plataform tested", content: "Website", icon: faDesktop},
                            {title: "Testers", content: "8", icon: faUsers},
                            {title: "Duration", content: "5 weeks", icon: faCalendar},
                        ]}
                        />
                    </div>
                    <div className="columns-right">
                        <img src="/images/macbook_lafitness_mockup.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="work_details_overview">
                <div className="overview_show">
                    <h3>Project Overview</h3>
                    <div>
                        <UXstudyBlockText>
                            This project was part of the <b>Design Research course</b> at Humber College, conducted collaboratively as a group. The objective was to evaluate LA Fitness's digital platform and understand how potential members experience its website and sign-up flows. Through a combination of competitive analysis, structured interviews, personas, and journey mapping, the study explored how usability issues, unclear communication, and aggressive sales tactics affect trust and conversion rates.
                            The research revealed that <b>users valued clarity, transparency, and a welcoming experience over aggressive sales pitches</b>. Findings highlighted opportunities for LA Fitness to improve trial-to-membership conversion by making the free trial sign-up more structured, leveraging social influence, and creating emotionally engaging onboarding experiences 
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>UX Research Skills</h4>
                            <ul>
                                <li><span>#</span>Interview_Research</li>
                                <li><span>#</span>Competitors_Analysis</li>
                                <li><span>#</span>Ethical Research</li>
                                <li><span>#</span>Data_Synthesis</li>
                                <li><span>#</span>Problem_Solving</li>
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
                            The interviews showed that users often felt confused or pressured during the free trial process. Participants emphasized that they are not resistant to information <b>—they are resistant to feeling pressured or misled</b>. They wanted clear membership options, transparent pricing, and more digital tools such as class booking, digital membership cards, and progress tracking. 
                            <b> Social influence was identified as a key motivator</b>: users were more likely to try a gym if friends or family recommended it. Additionally, inclusivity mattered—participants felt more comfortable when gyms showcased diverse body types and beginner-friendly environments
                        </UXstudyBlockText>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div className="icon_box_details">                        
                            <FontAwesomeIcon icon={faPenRuler} className="icon_work_details"/>
                            </div>
                            <h3>Planning, Interviews, Data Collection</h3>
                        </div>
                        <UXstudyBlockText>
                            The project began with a <b>competitive analysis</b>, comparing LA Fitness to key competitors such as GoodLife Fitness and Toronto Athletic Club. This stage helped us understand how different brands positioned themselves in terms of accessibility, transparency, and digital features, while also highlighting best practices that LA Fitness could adopt.
                            <br/><br/>
                            Following this, we moved into <b>research planning</b>, where the team designed the screener survey, consent forms, and interview discussion guides. Careful preparation ensured that participants were representative of the target audience and that the study followed ethical research standards, including informed consent and confidentiality.
                            <br/><br/>
                            We then conducted <b>semi-structured interviews</b> with eight participants who actively use gyms or fitness apps. The conversations focused on their experiences with free trials, sign-up processes, and digital fitness platforms. This approach provided both structured data around key themes and flexibility to explore deeper motivations and frustrations as participants shared their stories.
                            <br/><br/>
                            Once interviews were complete, the team engaged in <b>data analysis and synthesis</b>. Using thematic coding, we identified patterns around trust, sales pressure, usability frustrations, and expectations for digital features. These insights were translated into personas and journey maps, which captured the emotional highs and lows of the fitness experience and made the findings more tangible for stakeholders.
                            <br/><br/>
                            Finally, the process concluded with recommendations, where <b>we connected user needs to actionable opportunities for LA Fitness</b>. Suggestions included clarifying the free trial sign-up process, offering more flexible membership options, and creating engaging onboarding flows supported by digital tools like class booking and progress tracking.
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
                            The study revealed that LA Fitness's digital experience suffers not from absense of information, but from <b>clarity and overly aggressive tactics</b>. Users valued transparency, emotional connection, and flexible options far more than pushy sales flows. By reframing the free trial sign-up as an engaging and welcoming experience, and by introducing supportive features such as class booking and digital membership cards, LA Fitness could significantly increase conversions and long-term engagement.<br/><br/>
                            On a personal level, this project strengthened my ability to conduct and analyze interview research, to <b>dig beyond surface-level usability issues and uncover the emotional and motivational drivers of user behavior</b>. I learned how subtle elements like tone, transparency, and timing in the user journey can make or break trust, and how to translate these findings into actionable design recommendations that balance user needs with business goals.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );    
}