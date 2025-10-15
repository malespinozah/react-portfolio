import ReactPlayer from 'react-player';

export default function WDsectionView({videoLink}){
    return(
        <section className="WDprojectBox">
            <div className="WDprojectView">
                <div className="videoPayerProject">
                    <div className="videoNavView">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ReactPlayer 
                    src={videoLink}
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%" 
                    playsInline
                    controls={false}
                    />
                </div>
            </div>
        </section>
    );
} 