import React from 'react'
import "./Footer.css"
import Rasm_1 from "../images/logo.png"
import Rasm_2 from "../images/logo1.png"
import Rasm_3 from "../images/logo2.png"
import Rasm_4 from "../images/logo3.png"
import Rasm_5 from "../images/logo4.png"
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className='footer'>
      <div className='container footer-container'>
            <ul className='footer-list'>
                <img className='footer-img' src={Rasm_1} alt="" />
            </ul>
            <ul className='footer-list'>
                <li className='footer-item'><a className='footer-link' href="">{t("footer.footer_link_1")}</a></li>
                <li className='footer-item'><a className='footer-link' href="">{t("footer.footer_link_2")}</a></li>
                <li className='footer-item'><a className='footer-link' href="">{t("footer.footer_link_3")}</a></li>
                <li className='footer-item'><a className='footer-link' href="">{t("footer.footer_link_4")}</a></li>
            </ul>
            <ul className='footer-list'>
                <img className='footer-img' src={Rasm_2} alt="" />
                <img className='footer-img' src={Rasm_3} alt="" />
                <img className='footer-img' src={Rasm_4} alt="" />
                <img className='footer-img' src={Rasm_5} alt="" />
            </ul>
      </div>
    </div>
  )
}

export default Footer
