import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/rasm_1.png"
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {t,i18n} = useTranslation();
  const handleLaguage  = (e) =>{
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className='header'>
      <div className='container header-container'>
        <ul className='header-list-a'>
          <img className='header-img' src={Rasm_1} alt="" />
          <p className='header-text'>{t("header.header_text")}</p>
        </ul>
        <ul className='header-list'>
            <li className='header-item'><a className='header-link' href="">{t("header.header_link_1")}</a></li>
            <li className='header-item'><a className='header-link' href="">{t("header.header_link_2")}</a></li>
            <li className='header-item'><a className='header-link' href="">{t("header.header_link_3")}</a></li>
            <li className='header-item'><a className='header-link' href="">{t("header.header_link_4")}</a></li>
        </ul>
        <ul className='header-list'>
        <li className='header-item-a'>
            <select className='select' name="" id="" onChange={handleLaguage} value={i18n.language}>
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
          </li>
          <li className='header-item'>
            <h1 className='header-title'>+998 (33) 306 0098</h1>
            <p className='header-desc'>{t("header.header_title")}</p>
          </li>  
        </ul>
      </div>
    </div>
  )
}

export default Header
