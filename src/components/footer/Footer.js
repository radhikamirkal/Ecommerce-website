import React from 'react'
import './Footer.css'
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import whatsappIcon from "../assets/whatsapp.png";
import twiterIcon from "../assets/twitter.png";
function Footer() {
    return (
        <footer className='d-flex footerDiv justify-content-around text-light bg-dark  '>
            <div className="branding mt-2 ">
                <h2>The Generics</h2>
            </div>
            <div className="">
                <a
                    href="https://www.facebook.com/profile.php?id=100071851522726"
                    target="_blank"
                    className="sMediaIcon "
                >
                    <img src={facebookIcon} alt="youtube" className="sMediaIcon " />
                </a>

                <a
                    href="https://www.instagram.com/ganesh_s.jadhav/"
                    target="_blank"
                    className="sMediaIcon "
                >
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="sMediaIcon "
                    />
                </a>

                <a
                    href="https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    target="_blank"
                    className="sMediaIcon "
                >
                    <img src={twiterIcon} alt="Twitter" className="sMediaIcon " />
                </a>

                <a
                    href="https://api.whatsapp.com/send/?phone=9325461198&text&type=phone_number&app_absent=0"
                    target="_blank"
                    className="sMediaIcon "
                >
                    <img
                        src={whatsappIcon}
                        alt="Whatsapp"
                        className="sMediaIcon "
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer