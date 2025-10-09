import React from 'react'
//import { useRef } from 'react'
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";
import docList from "./doc_list.ts";
import "./docs.css";
import ProgressBar from './progress_bar.tsx';
import { ImageSlider } from './ImageSlider.tsx';

interface Props {
    DocMedia: string[],
    DocText: string,
    Date: string
}

function splitIntoParagraphs(text: string, maxLength: number): string[] {
    const paragraphs: string[] = [];
    let current = 0;

    while (current < text.length) {
        const nextChunk = text.slice(current, current + maxLength);

        // Try to cut at the last sentence-ending punctuation
        const lastPunctuation = Math.max(
            nextChunk.lastIndexOf(". "),
            nextChunk.lastIndexOf("! "),
            nextChunk.lastIndexOf("? ")
        );

        const splitIndex = lastPunctuation > 0 ? current + lastPunctuation + 1 : current + maxLength;

        paragraphs.push(text.slice(current, splitIndex).trim());
        current = splitIndex;
    }

    return paragraphs;
}


const DocEntries: React.FC<Props> = ({
   DocMedia,
   DocText,
   Date
}) => {

    return (
        <>
            <div className="entry_title">{Date}</div>
            <div className='entry'>

                <div className="entry_image">
                    <ImageSlider imageURLs={DocMedia}></ImageSlider>
                </div>
                 <div className="entry_text">
                    {
                        splitIntoParagraphs(DocText, 500).map((para, index) => (
                            <p key={index}>{para} </p>
                        ))
                    }
                </div>
            </div>
            <hr></hr>
        </>
    )
}



const Docs: React.FC = () => {

    return (
      <>
        <Navbar/>
          <ProgressBar  />
          <div className='docs_page'>
              <h1 className='title'>Documentation <br></br><img src="../../../doc_images/arrow_icon.svg" alt="" className="arrow_icon"></img></h1>         
                <div className = "wielder_of_the_magic_circle">
                </div>
                <div className='doc_entry' >
                    {
                        docList.map((val) => {
                        console.log(val.Name)
                            return (
                                <DocEntries DocMedia={val.DocMedia } DocText={val.DocText} Date ={val.Date}/>
                            )
                        })
                    }
                </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        <Footer/>
      </>
  )
}



export default Docs;