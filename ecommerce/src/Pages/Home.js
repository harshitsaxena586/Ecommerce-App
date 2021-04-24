import react from "react"
import ImageSlider from "../Components/ImageSlider"
import { SliderData } from "../SliderData"

export default function Home(){
  
    return (
      <div className="Hero">
         <div className="featured">
            Featured
         </div>
         <ImageSlider slides={SliderData}/>
        <img className="V-prop"src="https://ik.imagekit.io/harshit/V-sign_WnMjVbBWle.png"/>
      </div>
    )
}