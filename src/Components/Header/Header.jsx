import React from 'react'
import "./Header.css"
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {t,i18n} = useTranslation();
  const handleLaguage  = (e) =>{
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className='header'>
      <div className='container header-container'>
        <ul className='header-list'>
          <img className='header-img' src="" alt="" />
          <p className='header-text'>{t("header.header_text")}</p>
        </ul>
        <ul className='header-list'>
          <li className='header-item'><a className='header-link' href=""></a></li>
          <li className='header-item'><a className='header-link' href=""></a></li>
          <li className='header-item'><a className='header-link' href=""></a></li>
          <li className='header-item'><a className='header-link' href=""></a></li>
        </ul>
        <ul className='header-list'></ul>
        <li className='header-item'>
                    <select name="" id="" onChange={handleLaguage} value={i18n.language}>
                      <option value="uz">Uzbek</option>
                      <option value="ru">Russian</option>
                      <option value="en">English</option>
                    </select>
                </li>
      </div>
    </div>
  )
}

export default Header
