import React, {useEffect, useReducer, useState} from "react";
import {initialState, reducer} from "./hero_reducer.ts";
import {image_container_hover, image_container_no_hover} from "./hero_inline_style.ts";
import {TfiArrowDown} from "react-icons/tfi";
import {Link} from 'react-router-dom'

export const Hero: React.FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [mousePos, setMousePos] = useState({x: 0, y: 0})
    const [mouseHoverStyle, setMouseHoverStyle] = useState({})
    const [imageContainerStyle, setImageContainerStyle] = useState(image_container_no_hover)
    const [hover_image, setHover_image] = useState(false)

    useEffect(() => {
        const val = document.getElementById("hero_img")
        const offset = val?.getBoundingClientRect();
        const top = offset?.top;
        const left = offset?.left;
        const right = offset?.right;
        const bottom = offset?.bottom;

        const sidebar_offset = document.getElementById('menu_sidebar')?.getBoundingClientRect()
        const navbar_offset = document.getElementById('menu_navbar')?.getBoundingClientRect()

        const handleMouse = (e: any) => {
            if (left !== undefined && right !== undefined && top !== undefined && bottom !== undefined
                && sidebar_offset != undefined && navbar_offset != undefined) {

                const sidebar_top = sidebar_offset.top;
                const sidebar_bottom = sidebar_offset.bottom;
                const sidebar_left = sidebar_offset.left;
                const sidebar_right = sidebar_offset.right;

                const navbar_top = navbar_offset.top;
                const navbar_bottom = navbar_offset.bottom;
                const navbar_left = navbar_offset.left;
                const navbar_right = navbar_offset.right;

                if ((e.clientX >= left && e.clientX <= right && e.clientY >= top && e.clientY <= bottom)
                    && !(e.clientX >= sidebar_left && e.clientX <= sidebar_right && e.clientY >= sidebar_top && e.clientY <= sidebar_bottom)
                    && !(e.clientX >= navbar_left && e.clientX <= navbar_right && e.clientY >= navbar_top && e.clientY <= navbar_bottom)) {
                    setHover_image(true)
                    setMouseHoverStyle({
                        position: "absolute",
                        width: "150px",
                        height: "150px",
                        zIndex: "10",
                        backgroundColor: "white",
                        top:  mousePos.y + window.scrollY  + "px",
                        left:  mousePos.x  + "px",
                        borderRadius: "100px",
                        transform: "translate(-75px, -75px)",
                        cursor: "none"
                    })
                    setImageContainerStyle(image_container_hover)
                } else {
                    setHover_image(false)
                    setMouseHoverStyle({});
                    setImageContainerStyle(image_container_no_hover)
                }
            }
            setMousePos({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('mousemove', handleMouse)
        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    })


    useEffect(() => {
        const text = document.getElementById('rotated_text');
        if (text != null && text.textContent ) {
            text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
            const char = document.querySelectorAll('span')
            for (let i = 0; i < char.length; i++) {
                char[i].style.transform = "rotate(" + i * 10 + "deg)";
            }
        }
    });

    return (
        <div className='HomeImageSlider'>
            <div className='cursor' style={mouseHoverStyle}>
                {
                    (hover_image) ? <Link to='/robots'><p>VIEW ROBOTS</p></Link> : <></>
                }
            </div>
            <div className='hero_text_container'>
                <div className='hero_h_1'>
                    <p>{ state.hero_header }</p>
                </div>
                <div className='hero_pg_1'>
                    <p>
                        Welcome to Illini Robosub. We are creators, innovators, and
                        designers aimed to creating a submarine capable of accomplishing
                        given tasks. Our team is based at University of Illinois at Urbana
                        Champaign.
                    </p>
                </div>
                <div className='hero_btn_1'>
                    <div className='hero_scroll_text'>
                        <h1 id='rotated_text'>Scroll • Down • Scroll • Down • Scroll • Down •</h1>
                    </div>
                    <div className='hero_arrow'>
                        <TfiArrowDown className='hero_arrow'/>
                    </div>
                </div>
            </div>
            <div className='hero_image_container' style={imageContainerStyle}>
                <img src={ state.hero_image } id="hero_img"/>
                <div className='hero_image_btns'>
                    <button className={ state.hero_bt1 } onClick={ () => dispatch({type: 1}) }></button>
                    <button className={ state.hero_bt2 } onClick={ () => dispatch({type: 2}) }></button>
                    <button className={ state.hero_bt3 } onClick={ () => dispatch({type: 3}) }></button>
                </div>
            </div>
        </div>
    )
}