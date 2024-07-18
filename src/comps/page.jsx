import React from 'react'
import './page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faApple,faAndroid} from '@fortawesome/free-brands-svg-icons';
import Slider from './slider';
export default function Page() {
  return (
    <div className='page1'>
        <img className='shape1' src="/shape-1.png"></img>
        <img className='shape2' src="/shape-2.png"></img>
        <img className='shape3' src="/shape-3.png"></img>
        <img className='shape4' src="/shape-4.png"></img>
        <div className='pagepara'>
            <div className='pageheading'>We Build stunning mobile apps</div>
            <div className='pagesubhead'>Design better websites and spend less time without restricting creative freedom.</div>
            <div className='parabutton'>
                <span className='blackbutton'><FontAwesomeIcon icon={faApple} style={{color: "#ffffff",paddingRight:"0.5vw"}} />For Iphones</span>
                <span className='whitebutton'><FontAwesomeIcon icon={faAndroid} style={{color: "#000000",paddingRight:"0.5vw"}} />For Android</span>
            </div>
            <div className='sliderdiv'>
                <Slider/>
            </div>
        </div>
    </div>
  )
}
