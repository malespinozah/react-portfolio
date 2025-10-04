import UXTag from "../components/UXpages/UXtag";
import UXTitle from "../components/UXpages/UXtitle";
import UXstudyQuickInfo from "../components/UXpages/UXstudyQuickInfo";
import UXstudyBlockText from "../components/UXpages/UXstudyBlockText";
import { faBriefcase, faDesktop, faUsers, faCalendar, faUsersViewfinder, faPenRuler, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Draftpage() {
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
                            {title: "Duration", content: "7 weeks", icon: faCalendar},
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
                            A redesign project for the Mamma Martino's restaurant website, focused on creating a modern digital experience that supports both pickup and delivery orders. The project included desktop and mobile user flows, task flows, a UI style guide, and a mobile app prototype. The goal was to transform a static, outdated website into a responsive, user-friendly solution aligned with customer expectations.
                        </UXstudyBlockText>
                        <div className="work_my_skills">
                            <h4>Design Skills</h4>
                            <ul>
                                <li><span>#</span>UI/UX_Design</li>
                                <li><span>#</span>Wireframes_Low_Med_High</li>
                                <li><span>#</span>Website_Prototyping</li>
                                <li><span>#</span>Mobile_Prototyping</li>
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
                            Customers increasingly expect restaurants to offer seamless online ordering for pickup and delivery. The Mamma Martino's website provided only static menu information, with outdated UI patterns, unclear navigation, and no mobile-first considerations.
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
                            Competitor Benchmarking → studied restaurant platforms like Domino's, Uber Eats, and Pizza Hut to identify best practices for menu navigation and order checkout.
                            User Flow & Task Flow Design → mapped the full journey for both desktop and mobile users, covering core tasks such as browsing the menu, customizing meals, selecting pickup/delivery, and completing checkout.
                            UI Style Guide & Design System → created a style guide defining typography, color palette, spacing, iconography, and button states to ensure a consistent look-and-feel across all screens.
                            Mobile App Prototype → built a clickable prototype in Figma with simplified navigation, improved menu layouts, strong imagery, and streamlined checkout steps.
                            Iteration → improved final prototype after delivery to address issues from initial group work and align with modern design standards.
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
                            A modern and consistent UI system through a style guide and reusable components.
                            Clear, step-by-step ordering flows for both desktop and mobile.
                            A mobile-first prototype with intuitive navigation, simplified customization, and easy checkout.
                            Pickup and delivery options integrated directly into the design.<br/><br/>  
                            This project reinforced my ability to own the full UX/UI design cycle — from flows and system foundations to final prototype delivery — and adapt independently when collaboration fell short.
                        </UXstudyBlockText>
                    </div>
                </div>
            </section>
        </main>
    );
}