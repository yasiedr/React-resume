import React from 'react'
import { RxInstagramLogo } from 'react-icons/rx'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import './Footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="footer__head">
                <h5>Cantact Me</h5>
            </div>
            <div className="Footer__body">
                <a href="https//:instagram.com" target='_blank'>
                    <RxInstagramLogo />
                </a>
                <a href="https//:telegram.com" target='_blank'>
                    <FaTelegramPlane />
                </a>
                <a href="https//:Whatsapp.com" target='_blank'>
                    <BsWhatsapp />
                </a>
                <a href="https//:facebook.com" target='_blank'>
                    <ImFacebook />
                </a>
            </div>
        </footer>
    )
}
