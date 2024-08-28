import React from 'react'
import "./Wrapper.css"
import Rasm_1 from "../images/rasm12.png"
import { useTranslation } from 'react-i18next';
const Wrapper = () => {
    const {t} = useTranslation();
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <h1 className='wrapper-title'>{t("wrapper.wrapper_title")}</h1>
        <ul className='wrapper-list'>
            <li className='wrapper-item'>
                <img className='wrapper-img' src={Rasm_1} alt="" />
            </li>
            <li className='wrapper-item'>
                <h2 className='wrapper-title-a'>{t("wrapper.wrapper_title_1")}</h2>
                <p className='wrapper-text-a'>{t("wrapper.wrapper_text_1")}</p>
                <h3 className='wrapper-title-b'>{t("wrapper.wrapper_title_2")}</h3>
                <p className='wrapper-text'>.{t("wrapper.wrapper_text_2")}</p>
                <p className='wrapper-text'>.{t("wrapper.wrapper_text_3")}</p>
                <p className='wrapper-text'>.{t("wrapper.wrapper_text_4")}</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Wrapper