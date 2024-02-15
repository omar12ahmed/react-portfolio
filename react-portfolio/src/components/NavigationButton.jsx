import { useNavigate } from 'react-router-dom';

function NavigationButton(){
 
const navigate= useNavigate();

console.log(navigate)
const nextPage= ()=>{
    navigate("/contact")}

    const previousPage = ()=> {
        navigate("/");
    }


    return(
        <div>
            <button onClick={previousPage}>{'<'}</button>
            <button onClick={nextPage}>{">"}</button>
        </div>
    )
}
export default NavigationButton