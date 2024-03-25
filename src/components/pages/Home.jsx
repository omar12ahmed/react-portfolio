import HeroBanner from "../HeroBanner";
import ContentHomepage from "../ContentHomage";



function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10%" }}>
      <HeroBanner />
      <ContentHomepage />
    </div>

  )
}

export default Home