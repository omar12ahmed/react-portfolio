import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"



function NavigationButtons2(){
    
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    
    const pages = ["/","/about","/Project-gallery","/contact"]
    const index = pages.indexOf(location.pathname)
   
    function handlePrevious(){
      if(index>0){
        const previousPage = pages[index-1]
        navigate(previousPage)
      }
    }

    function handleNext(){
        if(index<pages.length-1){
            const nextPage = pages[index+1]
            navigate(nextPage)
          }
       

    }


return(
    <div className="nav-btns">
        <button className="nav-back" onClick={handlePrevious}>{"<"}</button>
        <button className="nav-forward" onClick={handleNext}> {">"} </button>
    </div>
)
}
export default NavigationButtons2