import ImageSlider from "../Components/ImageSlider"
import { SliderData } from "../SliderData"
import {Link} from 'react-router-dom';

export default function Home(){
  
    return (
      <div className="Hero">
         <div className="featured">
            Featured
         </div>
         <ImageSlider slides={SliderData}/>
         <div className="home-cta"><Link to="products"><button >Buy Now  </button>  </Link></div>
      </div>
    )
}