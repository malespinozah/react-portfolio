import { useState } from "react";
import WDworkBoxList from "../../components/WDpages/WDworkBoxList";

export default function WDprojectsList(){
    const [filterTag, setFilterTag] = useState("");
    const projects = [
        {
            wdworktitle: "Finding Events App",
            wdworktags: ['HTML', 'CSS', 'JS', 'Laravel'],
            wdworkurl: "https://github.com/malespinozah/Finding-Events-App",
            wdbutton: "Git Hub",
            wdworkdescription: "This app was built to manage and mapping events according to the location of cities, in this case is Toronto. Users with an account can create, update, delete events. Users with no account can only see the events with their information. Originally built in C#, switched to Laravel recently.",
            wdimage: "/images/findingevents.png",
        },
        {
            wdworktitle: "Inka Prestige",
            wdworktags: ['WordPress', 'HTML', 'CSS', 'Plugins'],
            wdworkurl: "/WebDevelopment/InkaPrestige",
            wdbutton: "Read more",
            wdworkdescription: "This is a Peruvian Restaurant Website. You can order for delivery or pickup, book a table and have a loyalty program if you sign up.",
            wdimage: "/images/inkaprestige.png",
        },
        {
            wdworktitle: "Bella Mia",
            wdworktags: ['Pug', 'CSS', 'JS', 'Node.js', 'MongoDB', 'SQL'],
            wdworkurl: "/WebDevelopment/BellaMia",
            wdbutton: "Read More",
            wdworkdescription: "This is a Website for a jewerly store, which was created using Node Express and MongoDB for database. The shop and faq links are the only functional pages.",
            wdimage: "/images/bellamia.png",
        },
        {
            wdworktitle: "Favourite Music",
            wdworktags: ['PHP', 'CSS', 'SQL', 'Bootstrap 5'],
            wdworkurl: "/WebDevelopment/FavouriteMusic",
            wdbutton: "Read More",
            wdworkdescription: "This is a basic app built with Laravel and mySQL. Bootstrap 5 was used for design. It was a group project for Web Development. You can add your favourite artists and saved the albums you liked the most.",
            wdimage: "/images/favouritemusic.png",
        },
        {
            wdworktitle: "Death Predictions",
            wdworktags: ['HTML', 'CSS', 'JS'],
            wdworkurl: "https://github.com/malespinozah/DeathPrediction",
            wdbutton: "Git Hub",
            wdworkdescription: "Death Predictions is a playful “useless website” that generates absurdly random outcomes based on your name and birth date. Upon submission, users are greeted with unexpected clip from Happy Tree Friends, blending dark humor with nostalgia in a lighthearted interactive experience.",
            wdimage: "/images/deathpredictions.png",
        },
        {
            wdworktitle: "Music Helper",
            wdworktags: ['HTML', 'CSS', 'JS'],
            wdworkurl: "https://github.com/malespinozah/Music-Helper",
            wdbutton: "Git Hub",
            wdworkdescription: "A timer which music that will help you to finish your daily tasks. Timer doesn't have a pause button to make sure user will not extend their time to finish a task.",
            wdimage: "/images/musichelper.png",
        },
    ];
    const uniqueTags = [...new Set(projects.flatMap(p => p.wdworktags))];

    return(
        <main id="main">
            <div className="wd_works_title">
                <h2 className="wd_workstitle">Web Development Works</h2>
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
            <div className="wd_works_list">
                {projects
                .filter(project => 
                    filterTag === "" || project.wdworktags.includes(filterTag)
                )
                .map((project, index) => (
                <WDworkBoxList
                key={index}
                wdworktitle={project.wdworktitle}
                wdworktags={project.wdworktags}
                wdworkurl={project.wdworkurl}
                wdbutton={project.wdbutton}
                wdworkdescription={project.wdworkdescription}
                wdimage={project.wdimage}
                />
                ))}
            </div>
        </main>
    );
}