import React from 'react'
import "./Main.css"
import Rasm_1 from "../images/img1.png"
import Rasm_2 from "../images/img2.png"
import Rasm_3 from "../images/img3.png"
import Rasm_4 from "../images/img4.png"
import Rasm_5 from "../images/img5.png"
import Rasm_6 from "../images/img6.png"
import { useTranslation } from 'react-i18next';
const Main = () => {
    const {t} = useTranslation();
  return (
    <div className='main'>
      <div className='container main-container'>
        <h1 className='main-title'>{t("main.main_title")}</h1>
        <ul className='main-list'>
            <li className='main-item'>
                <img className='main-img' src={Rasm_1} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_1")}</h2>
                <p className='main-text'>{t("main.main_text_1")}</p>
            </li>
            <li className='main-item'>
                <img className='main-img' src={Rasm_2} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_2")}</h2>
                <p className='main-text'>{t("main.main_text_2")}</p>
            </li>
            <li className='main-item'>
                <img className='main-img' src={Rasm_3} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_3")}</h2>
                <p className='main-text'>{t("main.main_text_3")}</p>
            </li>
            <li className='main-item'>
                <img className='main-img' src={Rasm_4} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_4")}</h2>
                <p className='main-text'>{t("main.main_text_4")}</p>
            </li>
            <li className='main-item'>
                <img className='main-img' src={Rasm_5} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_5")}</h2>
                <p className='main-text'>{t("main.main_text_5")}</p>
            </li>
            <li className='main-item'>
                <img className='main-img' src={Rasm_6} alt="" />
                <h2 className='main-title-a'>{t("main.main_title_6")}</h2>
                <p className='main-text'>{t("main.main_text_6")}</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Main
