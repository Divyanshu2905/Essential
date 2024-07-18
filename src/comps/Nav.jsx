import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faEarthAsia,faMagnifyingGlass,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
export default function Nav() {
  return (
    <div>
      <div className='Nav'>
        <div className='NavTopMain'>
            <div className='NavTop'>
                  <span>
                      Get Essentials theme now
                  </span>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{marginLeft:"0.3vw"}} />
                  </span>
              </div>
            <div className='NavTop2'>
                <span>
                    Follow us on
                </span>
                <span className='icon1'>
                  <FontAwesomeIcon icon={faFacebook} size='lg' style={{marginLeft:"0.8vw"}} />
                </span>
                <span className='icon1'>
                  <FontAwesomeIcon icon={faXTwitter} size='lg' style={{marginLeft:"0.8vw"}} />
                </span>
                <span className='icon1'>
                  <FontAwesomeIcon icon={faInstagram} size='lg' style={{marginLeft:"0.8vw"}} />
                </span>
                <span className='icon1'>
                  <FontAwesomeIcon icon={faDribbble} size='lg' style={{marginLeft:"0.8vw"}} />
                </span>
              </div>
          </div>
      </div>
      <div className='NavBottom'>
          <div className='NavBottomMain'>
              <div className='NavBottom1'>
                  <span className='AppLogo'>
                    <img src='/app-logo-dark.png' style={{height:"60px",paddingTop:"15px",paddingBottom:"15px",cursor:"pointer"}}></img>
                  </span>
                  <span style={{paddingLeft:"10px",paddingRight:"10px", fontSize:"25px", color:"#eaecec"}}>
                    |  
                  </span>
                  <span className='NavLanguage'>
                    <span style={{paddingRight:"5px"}}>
                      <FontAwesomeIcon icon={faEarthAsia} size="lg" />
                    </span>
                    <span>
                      English
                    </span>
                  </span>
              </div>
              <div className='NavBottom2'>
                  <span className='NavOption'>
                      Demos
                  </span>
                  <span className='NavOption'>
                      Pages
                  </span>
                  <span className='NavOption'>
                      Portfolio
                  </span>
                  <span className='NavOption'>
                      Blog
                  </span>
                  <span className='NavOption'>
                      Shop
                  </span>
                  <span className='NavOption'>
                      Elements
                  </span>
                  <span className='Navtab'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </span>
                  <span className='Navtab'>
                    <FontAwesomeIcon icon={faBagShopping} size="lg" />
                  </span>
                  <span className='downloadspan'>
                  <Button className='DownloadButton'>Download Now</Button>
                  </span>
              </div>
            </div>
      </div>
    </div>
    
  )
}

