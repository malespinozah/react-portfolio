import WDstudyBlockText from "../../components/WDpages/WDBlockText";
import WDsectionView from "../../components/WDpages/WDsectionView";
import WDTag from "../../components/WDpages/WDTag";

export default function FavouriteMusic() {
    return(
        <main id="main">
            <WDsectionView
            videoLink="https://www.dropbox.com/scl/fi/w2be2v6ofcb123ogjo962/favouritemusic_prev.mov?rlkey=xugomt7rr1zxp3zgauf4zbakk&st=7tgefglf&raw=1"
            />
            <section className="WD_projectContent">
                <div className="WDprojectInfo">
                    <div style={{textAlign: 'center'}}>
                        <h2 className="WDprojectTitle">Favourite Music</h2>
                        <WDTag>Laravel: php</WDTag>
                    </div>
                    <WDstudyBlockText>
                        This was my grouo project for Web Development in Humber Polytechnic, 2024.<br/>
                        <b>Preview live no longer available: updated August 2025.</b><br/><br/>
                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam corrupti maxime magni labore ab sapiente itaque eos commodi dolor! Maiores aspernatur reiciendis voluptate nulla blanditiis quod ab, sint consequatur.<br/><br/>
                    </WDstudyBlockText>
                </div>
            </section>
        </main>
    );
}