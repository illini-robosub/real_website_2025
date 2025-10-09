import { useState } from "react"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs"
import "./image_slider.css";

type ImageSliderProps = {
    imageURLs: string[]
}

export function ImageSlider({ imageURLs } : ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function ShowNextImage() {
        setImageIndex(index => {
            if (index == imageURLs.length - 1) return 0;
            else return index+1;
        })
    }

    function ShowLastImage() {
        setImageIndex(index => {
            if (index == 0) return imageURLs.length - 1;
            else return index-1;
        })
    }




    return <div style={{width:"100%", height:"100%", position:"relative"}}>
        <BsArrowLeftCircleFill onClick={ShowLastImage} className="image_slider_button" style={{ left:0 }}/> 

        <div style={{width:"100%", height:"100%", display:"flex", overflow:"hidden"}}>
            {imageURLs.map(url => (
                <img key = {url} src ={url} className = "image_slider_media" style = {{translate: `${-100 * imageIndex}%`}}></img>
            ))}
        </div>

        <BsArrowRightCircleFill onClick={ShowNextImage} className="image_slider_button" style={{ right:0 }}/>

        <div style = {{position:"absolute", bottom:"0.5rem", left:"50%", translate:"-50%", display:"flex", gap:"0.25rem"}}>
            {imageURLs.map((_, index) => (
                <button key={index} className={index === imageIndex ? "slider_dot_button" : "slider_dot_button dot_inactive"} onClick={() => setImageIndex(index)}></button>
            ))}
        </div> 

    </div>
}  