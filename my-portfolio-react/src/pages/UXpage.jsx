import UXTitle from "../components/UXpages/UXtitle";
import UXTag from "../components/UXpages/UXtag";
import UXstudyInfo from "../components/UXpages/UXstudyInfo";
import UXstudyPhotos from "../components/UXpages/UXstudyPhotos";
import UXstudyBlockText from "../components/UXpages/UXstudyBlockText";
import UXstudyCellTable from "../components/UXpages/UXstudyCellTable";

export default function UXpage() {
  return (
    <main id="main">
      <div className="UXBanner">
        <UXTitle>Designed & implemented Resto</UXTitle>
        <UXTag>Mobile platform</UXTag>
      </div>
      <UXstudyInfo
      infoItems={[
        {title: "Company", content: "Swiss Chalet"},
        {title: "Role", content: "UX Designer"},
        {title: "Expertise", content: "UX/UI Design"},
        {title: "Year", content: "2024"},
      ]}
      />
      <UXstudyPhotos
      imageOne="mobile.png"
      imageTwo="mobile.png"
      imageThree="mobile.png"
      />
      <div className="UXDescription">
        <h3>Project Description</h3>
        
        <UXstudyBlockText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deserunt ex facilis velit dolores dignissimos eius exercitationem saepe voluptatibus minima aliquam error at, quos vero eum. Tempore nisi voluptates labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sint temporibus, nulla quasi ab placeat. At delectus laborum tempora est eos beatae, hic incidunt iusto ut placeat autem omnis. Quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis harum aliquid quod nemo sequi sapiente. Totam aliquid a minus esse enim rem voluptas nulla molestias incidunt, atque, nisi itaque!
        </UXstudyBlockText>

        <UXstudyCellTable
        tableItems={[
          {header:"Timeline", cell:"From explorations to final designs in 5 weeks while working with multiple projects at the same time"},
          {header:"Background", cell:"Wthr leverages artificial intelligence to optimize your daily schedule, ensuring maximum productivity and work-life balance. The app seamlessly integrates with your existing calendar and task management tools, using advanced algorithms to prioritize tasks, suggest optimal times for meetings, and provide smart reminders."},
        ]}
        />
      </div>

      <div className="UXProcess">
        <h3>Project Process</h3>
        <UXstudyBlockText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deserunt ex facilis velit dolores dignissimos eius exercitationem saepe voluptatibus minima aliquam error at, quos vero eum. Tempore nisi voluptates labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sint temporibus, nulla quasi ab placeat. At delectus laborum tempora est eos beatae, hic incidunt iusto ut placeat autem omnis. Quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis harum aliquid quod nemo sequi sapiente. Totam aliquid a minus esse enim rem voluptas nulla molestias incidunt, atque, nisi itaque!
        </UXstudyBlockText>
        
        <UXstudyCellTable
        tableItems={[
          {header: "Research & Planning", cell:"Conducted market research to identify existing scheduling challenges and user preferences. Defined target audience segments and outlined key features based on user needs and market trends."},
          {header: "Design & Prototyping", cell: "Collaborated with designers to create intuitive user interfaces and interactive prototypes. Iteratively refined designs based on user feedback to enhance usability and visual appeal."},
          {header: "Development & Implementation", cell: "Leveraged agile development methodologies to build the scheduling app from the ground up. Prioritized feature development based on user feedback and technical feasibility. Implemented AI algorithms to analyze user behavior and optimize scheduling recommendations."},
          {header: "Testing & Optimization", cell: "Conducted rigorous testing across various devices and platforms to ensure compatibility and performance. Gathered user feedback through beta testing and iteratively optimized the app based on usability metrics and user satisfaction."},
        ]}
        /> 
      </div>

      <div className="UXSolution">
        <h3>Project Solution</h3>
        <UXstudyBlockText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deserunt ex facilis velit dolores dignissimos eius exercitationem saepe voluptatibus minima aliquam error at, quos vero eum. Tempore nisi voluptates labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sint temporibus, nulla quasi ab placeat. At delectus laborum tempora est eos beatae, hic incidunt iusto ut placeat autem omnis. Quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis harum aliquid quod nemo sequi sapiente. Totam aliquid a minus esse enim rem voluptas nulla molestias incidunt, atque, nisi itaque!
        </UXstudyBlockText>
      </div>

    </main>
  );
}