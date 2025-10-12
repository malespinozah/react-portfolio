import WDTitle from "../components/WDpages/WDtitle";

export default function WDpage(){
    return(
        <main id="main">
            <div className="WDprojectBox">
                <div className="WDprojectView">
                    <div className="WDprojectInfo">
                        <p className="WDprojectTitle">InkaPrestige</p>
                    </div>
                    <div className="videoPayerProject">
                        <div className="videoNavView">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <video width="100%" src="https://drive.google.com/file/d/1hebEn9HImN7cefOTqpDyImmMc9d19MvI/preview" autoPlay muted loop></video>
                    </div>
                </div>
            </div>
        </main>
    );
}