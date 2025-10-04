import * as React from 'react';
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Background from '../components/Background'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenRuler, faPalette, faLaptopFile, faCode, faFolderOpen, faPaperPlane, faCircleXmark, faChevronDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import UXworkBox from '../components/UXpages/UXworkBox'
import UXskillsBox from '../components/UXSkillsBox'
import SkillsTools from '../components/SkillTools';

export default function Homepage(){
    const location = useLocation();
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth'});
            }
        }
    }, [location]);

    // Reset fade when opening modal
    useEffect(() => {
        if (showMessageModal) setFadeOut(false);
    }, [showMessageModal]);

    return(
        <main id="main">
            <section id="wrap-profile">
                <Background/>
                <div className='wrapper_profile'>
                    <div className="wrap_profile">
                        <div className="profile-photo">
                            <img src="/images/profile.jpg" alt="profile" />
                        </div>
                        <div className="profile-tag">Web Developer & UX Designer</div>
                    </div>
                    <div className="profile-info">
                        <h1>Designing with <span>Music,</span><br/>Developing like a <span>Piece of Art.</span>
                        </h1>
                        <div className="profile-text">
                            <p>Harmonizing creativity and code for beautiful digital experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="button-to-section">
                    <a href="#about-me">
                    <img src="/images/cherry.png" alt="" srcset="" /><span>explore</span></a>
                </div>
            </section>
            <section id='about-me'>
                <div className="wrapper_about">
                    <div className='side-image'>
                        <img src="/images/profile.jpg" alt="about-photo"/>
                        <div className="about-tag">
                                <span>Transforming ideas into digital realities,</span>
                                <span>with the harmony of design and development.</span>
                        </div>
                    </div>
                    <div className='side-about'>
                        <div>
                            <h2>About Me</h2>
                            <div className='side-subtitle'>
                                <span>Here's a little of me.</span>
                            </div>
                        </div>
                        <div>
                            <p>
                                I'm Maria Alejandra Espinoza, Web Developer based in Toronto. I have a Ontario Certificate for Web Development and I'm currently enrolled in User Experience Design at Humber Polytechnic to complement my knowlegde and skills with design concepts to maxime and customize my services and products based on the clients' and user needs.
                            </p>
                            <p>
                                I'm a proactive professional web designer who works with quality and commitment. Quick-learner person always willing to gain experience from each opportunity and taking challenges in web development, especially in Front-End Field in order to cover all the needs the client has. I maximize creativity for commercial purposes.
                            </p>
                            <p>
                                Recently I've learned more about the user experience in design and this has helped me to not only improve my view of how to deliver and develop projects, but to strengh my abilities in research to understand the pain points I will face while building products and what I should I do to solve them efficiently. 
                            </p>
                        </div>
                        <div>
                            <a href="http://"><span><FontAwesomeIcon icon={faFolderOpen}/> view resume</span></a>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setShowMessageModal(true)
                            }}><span><FontAwesomeIcon icon={faPaperPlane}/> message me</span></a>
                        </div>
                    </div>
                </div>
                {showMessageModal && (
                    <div className={`message-modal ${fadeOut ? 'fade-out' : ''}`}>
                        <div className="message-modal-content">
                            <button
                                className="close-btn"
                                onClick={() => {
                                    setFadeOut(true);
                                    setTimeout(() => setShowMessageModal(false), 500);
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} className='close-button'/>
                            </button>
                            {!isSent ? (
                                <>
                                    <h2>Send me a message</h2>
                                    <form
                                      onSubmit={async (e) => {
                                        e.preventDefault();
                                        const form = e.currentTarget;
                                        const formData = {
                                          name: form.elements.name.value.trim(),
                                          email: form.elements.email.value.trim(),
                                          subject: form.elements.subject.value.trim(),
                                          message: form.elements.message.value.trim(),
                                        };

                                        try {
                                          const res = await fetch("/api/contact", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify(formData),
                                          });
                                          const data = await res.json();

                                          if (res.ok) {
                                            setIsSent(true);
                                            setFadeOut(true);
                                            // close the modal after 5 sec
                                            setTimeout(() => setShowMessageModal(false), 5000);
                                          } else {
                                            alert(data.message + (data.detail ? `\nDetail: ${data.detail}` : ""));
                                          }
                                        } catch (err) {
                                          alert("Network error sending message. Please try again.");
                                          console.error(err);
                                        }
                                      }}
                                    >
                                      <input name="name" type="text" placeholder="Your name" required />
                                      <input name="email" type="email" placeholder="Your email" required />
                                      <input name="subject" type="text" placeholder="Subject" required />
                                      <textarea name="message" placeholder="Your message" rows="6" required></textarea>
                                      <button type="submit">Send</button>
                                    </form>
                                </>
                              ) : (
                                <div className="thank-you-message">
                                    <h2>Thank you!</h2>
                                <p>I'll reach out to you soon. 🌸</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div className="button-to-next">
                    <a href="#highlights">
                    <span><FontAwesomeIcon icon={faAnglesDown}/></span></a>
                </div>
            </section>
            <section id="highlights">
                <div className="wrapper_highlights">
                    <div className="side-title">
                        <h2>Highlights</h2>
                        <div className="side-subtitle">
                            <span>Recent UX & Web Projects.</span>
                        </div>
                    </div>
                    <div className="side-preview-hg">
                        <div className="big-column">
                            <UXworkBox
                            uxworktitle="Mamma Martino's Website & App"
                            uxworktag="UI/UI Design"
                            uxworkurl="/UXDesign/MammaMartinos"
                            uximageurlone="/images/mm_macbook_mockup.png"
                            uximageurltwo="/images/mm_iphone_mockup.png"
                            />
                        </div>
                        <div className='division-flex'>
                        <div className="small-column">
                            <UXworkBox
                            uxworktitle="Freshii Website & App"
                            uxworktag="Usability Test"
                            uxworkurl="/UXpage"
                            uximageurlone="/images/freshii_macbook_mockup.png"
                            uximageurltwo="/images/freshii_iphone_mockup.png"
                            />
                            <UXworkBox
                            uxworktitle="Craigslist Website & App"
                            uxworktag="Usability Test"
                            uxworkurl="/UXDesign/Craigslist"
                            uximageurlone="/images/craigslist_macbook_mockup.png"
                            uximageurltwo="/images/craigslist_iphone_mockup.png"
                            />
                        </div>
                        <div className="small-column">
                            <UXworkBox
                            uxworktitle="Service Design"
                            uxworktag="UX Research"
                            uxworkurl="/UXDesign/Gourmet"
                            uximageurlone="/images/gourmet_macbook_mockup_1.png"
                            uximageurltwo="/images/gourmet_macbook_mockup_2.png"
                            />
                            <UXworkBox
                            uxworktitle="Locals Toronto"
                            uxworktag="Interaction Design Studio"
                            uxworkurl="/UXDesign/LocalsToronto"
                            uximageurlone="/images/locals_iphone_mockup_1.png"
                            uximageurltwo="/images/locals_iphone_mockup_2.png"
                            />
                        </div>
                        </div>
                        <div className="big-column">
                            <UXworkBox
                            uxworktitle="Finding Events App"
                            uxworktag="Web Development"
                            uxworkurl="/UXpage"
                            uximageurlone="/images/finding_1_macbook_mockup.png"
                            uximageurltwo="/images/finding_2_macbook_mockup.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="button-to-next">
                    <a href="#my-skills">
                    <span><FontAwesomeIcon icon={faAnglesDown}/></span></a>
                </div>
            </section>
            <section id='my-skills'>
                <div className="wrapper_skills">
                    <div className="side-title">
                        <div>
                            <h2>Designer &<br></br> Web Developer</h2>
                            <div className="side-subtitle">
                                <span>This is what I'm able to do.</span>
                            </div>
                        </div>
                        <div style={{ height:'65%', display:'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                            <UXskillsBox
                            fontAicon={faLaptopFile}
                            skillTitle="UX Research & Testing"
                            skillText="Collecting real user insights through interviews, surveys, and usability testing to ensure solutions are grounded in evidence, not assupmtions."
                            />

                            <UXskillsBox
                            fontAicon={faPenRuler}
                            skillTitle="UX Design"
                            skillText="From wireframes, prototypes, and user flows to journey maps and blueprints, I design experiences for complex interactions intuitive and enjoyable."
                            />

                            <UXskillsBox
                            fontAicon={faPalette}
                            skillTitle="UI Design"
                            skillText="Designing polished, visually consistent interfaces that strengthen brand identity and make usable and memorable digital products."
                            />

                            <UXskillsBox
                            fontAicon={faCode}
                            skillTitle="Full-Stack Development"
                            skillText="Bringing designs to life with clean, responsive code — bridging the gap between design vision and functional reality."
                            />
                        </div>
                    </div>
                    <div className="side-info">      
                            <SkillsTools
                            toolImage="https://i.imgur.com/nkN9nbH.png"
                            toolAlt="html5"
                            toolName="HTML5"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="#FF3D3D"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/xp1xlPD.png"
                            toolAlt="javascript"
                            toolName="JavaScript"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/Vzq8pMn.png"
                            toolAlt="CSS"
                            toolName="CSS"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="#FF3D3D"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/AVfh8zJ.png"
                            toolAlt="visual studio"
                            toolName="VS Code"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/mJsRgxa.png"
                            toolAlt="react"
                            toolName="React"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="/svgs/laravel.svg"
                            toolAlt="laravel"
                            toolName="Laravel"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="/svgs/node.png"
                            toolAlt="node.js"
                            toolName="Node.js"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolL
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/bAKTR8A.png"
                            toolAlt="mongodb"
                            toolName="MongoDB"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="/svgs/php.png"
                            toolAlt="php"
                            toolName="PHP"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="/svgs/github.png"
                            toolAlt="github"
                            toolName="GitHub"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="#FF3D3D"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/iKmk8mq.png"
                            toolAlt="figma"
                            toolName="Figma"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="#FF3D3D"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/aOj3WXR.png"
                            toolAlt="miro"
                            toolName="Miro"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="#FF3D3D"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/k8S4TZz.png"
                            toolAlt="mysql"
                            toolName="MySQL"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/fZnjWfr.png"
                            toolAlt="docker"
                            toolName="Docker"
                            toolLevelB="#00FC3F"
                            toolLevelI="transparent"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="https://i.imgur.com/BO3X6Gg.png"
                            toolAlt="phpmyadmin"
                            toolName="phpMyAdmin"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />
                            <SkillsTools
                            toolImage="/svgs/mamp.png"
                            toolAlt="mamp"
                            toolName="MAMP"
                            toolLevelB="#00FC3F"
                            toolLevelI="#F8FF00"
                            toolLevelA="transparent"
                            />              
                    </div>
                </div>
            </section>
        </main>
    )
}
