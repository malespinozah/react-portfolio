import { useState } from "react";
import UXworkBoxList from "../../components/UXpages/UXworkBoxList";

export default function UXprojectsList(){
    const [filterTag, setFilterTag] = useState("");
    const projects = [
        {
            uxworktitle: "Mamma Martino's Website & App",
            uxworktags: ['InformationArchitecture', 'Prototypes', 'IndependentInitiative'],
            uxworkdescription: "Mamma Martino's is an Italian restaurant seeking to improve the customer experience by introducing delivery and pickup services.",
            uxworkurl:"/UXDesign/MammaMartinos",
            uximageurl:"/images/macbook_iphone_mm.png",
        },
        {
            uxworktitle: "Freshii Website & App",
            uxworktags: ['UsabilityTest', 'Prototypes', 'IndependentInitiative'],
            uxworkdescription: "Usability issues in the Freshii app impact the ordering experience. Redesigning these flows enables an intuitive, enjoyable, and efficient interaction for users.",
            uxworkurl: "/UXDesign/Freshii",
            uximageurl: "/images/macbook_iphone_freshii.png",
        },
        {
            uxworktitle: "Craigslist Website & App",
            uxworktags: ['UsabilityTest', 'Prototypes', 'IndependentInitiative'],               
            uxworkdescription: "Craigslist faces usability challenges that impact user experience. Optimising navigation and IA will create a trustworthy and more intuitive interface.",
            uxworkurl: "/UXDesign/Craigslist",
            uximageurl: "/images/macbook_iphone_craigslist.png",
        },
        {
            uxworktitle: "Gourmet Express",
            uxworktags: ['ServiceDesign', 'UXResearch', 'Collaborative'],               
            uxworkdescription: "A service design project focused on identifying operational opportunities and improving both staff workflows and customer experiences.",
            uxworkurl: "/UXDesign/Gourmet",
            uximageurl: "/images/macbook_gourmet_mockup.png",
        },
        {
            uxworktitle: "Loblaws",
            uxworktags: ['Optimization', 'UXResearch', 'Collaborative'],
            uxworkdescription: "After a redesign, Loblaws saw stable traffic but a decline in online purchases. This project explored opportunities to enhance the shopping experience.",
            uxworkurl: "/UXDesign/Loblaws",
            uximageurl: "/images/macbook_loblaws_mockup.png",
        },
        {
            uxworktitle: "LAFitness",
            uxworktags: ['InterviewResearch', 'UXResearch', 'Collaborative'],             
            uxworkdescription: "After a redesign, Loblaws saw stable traffic but a decline in online purchases. This project explored opportunities to enhance the shopping experience.",
            uxworkurl: "/UXDesign/LAFitness",
            uximageurl: "/images/macbook_lafitness_mockup.png",
        },
        {
            uxworktitle: "LocalsToronto",
            uxworktags: ['IXD', 'UXResearch', 'Prototypes', 'Collaborative'],             
            uxworkdescription: "After a redesign, Loblaws saw stable traffic but a decline in online purchases. This project explored opportunities to enhance the shopping experience.",
            uxworkurl: "/UXDesign/LocalsToronto",
            uximageurl: "/images/locals_toronto.png",
        }
    ];
    const uniqueTags = [ ...new Set(projects.flatMap(p => p.uxworktags))];
    
    return(
        <main id="main">
            <div className="ux_works_title">
                <h2 className="ux_workstitle">UX Design Works</h2>
            </div>
            <div className="work_filter-tags">
                <label>Filter by tag: </label>
                <select onChange={e => setFilterTag(e.target.value)} value={filterTag}>
                    <option value="">All</option>
                    {uniqueTags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                        ))}
                </select>
            </div>
            <div className="ux_works_list">
                {projects
                .filter(project => 
                    filterTag === "" || project.uxworktags.includes(filterTag)
                )
                .map((project, index) => (
                <UXworkBoxList
                key={index}
                uxworktitle={project.uxworktitle}
                uxworktags={project.uxworktags}
                uxworkurl={project.uxworkurl}
                uxworkdescription={project.uxworkdescription}
                uximageurl={project.uximageurl}
                />
                ))}
            </div>
        </main>
    );
}