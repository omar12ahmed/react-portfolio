import HeroBanner from "../HeroBanner";
import ContentHomepage from "../ContentHomage";



function Home(){
    return (
      <div style={{display:"flex",justifyContent:"space-between"}}>
            <HeroBanner/>
            <ContentHomepage/>
      </div>
          
    )
}

export default Home