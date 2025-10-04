import { useState } from "react";
import WDworkBoxList from "../../components/WDpages/WDworkBoxList";

export default function WDprojectsList(){
    const [filterTag, setFilterTag] = useState("");
    const projects = [
        {
            wdworktitle: "Inka Prestige",
            wdworktags: ['WordPress', 'HTML', 'CSS', 'Plugins'],
            wdworkurl: "/WDpage",
            wdworkdescription: "This is a Peruvian Restaurant Website. You can order for delivery or pickup, book a table and have a loyalty program if you sign up.",
            wdimage: "/images/inkaprestige.png",
        },
        {
            wdworktitle: "Bella Mia",
            wdworktags: ['Pug', 'CSS', 'JS', 'Node.js', 'MongoDB', 'SQL'],
            wdworkurl: "/WDpage",
            wdworkdescription: "This is a Website for a jewerly store, which was created using node express and mongodb for database. The shop and faq links are the only functional pages.",
            wdimage: "/images/bellamia.png",
        },
        {
            wdworktitle: "Favourite Music",
            wdworktags: ['PHP', 'CSS', 'SQL'],
            wdworkurl: "/WDpage",
            wdworkdescription: "This is my first simple page using PHP and mySQL to connect database and displaying with PHP",
            wdimage: "/images/favorite_music.mov",
        },
        {
            wdworktitle: "Death Predictions",
            wdworktags: ['HTML', 'CSS', 'JS'],
            wdworkurl: "/WDpage",
            wdworkdescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis quod fugiat quis ducimus fugit expedita, totam laudantium? Assumenda, ipsum. Ratione officiis cum consectetur animi sunt nobis porro incidunt official.",
            wdimage: "/images/deathpredictions.png",
        },
        {
            wdworktitle: "Music Helper",
            wdworktags: ['HTML', 'CSS', 'JS'],
            wdworkurl: "/WDpage",
            wdworkdescription: "A timer which music that will help you to finish your daily tasks. Timer doesn't have a pause button to make sure user will not extend their time to finish a task.",
            wdimage: "/images/musichelper.png",
        },
        {
            wdworktitle: "Finding Events App",
            wdworktags: ['HTML', 'CSS', 'JS', 'C#'],
            wdworkurl: "/WDpage",
            wdworkdescription: "This app was built to manage and mapping events according to the location of cities, in this case is Toronto. Users with an account can create, update, delete events. Users with no account can only see the events with their information.",
            wdimage: "/images/findingevents.png",
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
                wdworkdescription={project.wdworkdescription}
                wdimage={project.wdimage}
                />
                ))}
            </div>
        </main>
    );
}