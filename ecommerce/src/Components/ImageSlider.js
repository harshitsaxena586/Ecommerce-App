import react, { useState } from "react"
import { SliderData } from "../SliderData"

function ImageSlider({slides}){
const [current,setCurrent] =useState(0)
const length  = slides.length 

const nextSlide =()=>{
setCurrent(current===length  - 1 ? 0 : current+1 )
}

const prevSlide =()=>{
  setCurrent(current===0 ? length -1 : current-1 )
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return(
    <section className="slider">
    <button onClick={prevSlide} className={"left-arrow"}>◀</button>
    <button onClick={nextSlide} className={"right-arrow"}>▶</button>
    {SliderData.map((slide,index)=>{
      return(
       <div className={index===current ? "slide-active" : "slide"} key={index}> 
       {index=== current &&(<img src={slide.image}/>)}
       {index=== current &&(<h1>{slide.title}</h1> )}
        </div>
      )

    })}
    
    </section>

  )
}

export default ImageSlider