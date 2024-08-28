import React from 'react';
import "./Hero.css";
import Rasm_1 from "../images/rasm_2.png";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='hero'>
      <div className='container hero-container'>
        <p className='hero-text'>{t("hero.hero_text_1")}</p>
        <h1 className='hero-title'>{t("hero.hero_title")}</h1>
        <ul className='hero-list'>
          <li className='hero-item'>
            <img className='hero-img' src={Rasm_1} alt="" />
            <p className='hero-text-a'>{t("hero.hero_matn_1")}</p>
          </li>
          <li className='hero-item'>
            <img className='hero-img' src={Rasm_1} alt="" />
            <p className='hero-text-b'>{t("hero.hero_matn_2")}</p>
          </li>
        </ul>
        <button className='hero-btn'>{t("hero.hero_btn")}</button>
        <p className='hero-text-c'>{t("hero.hero_text_2")}</p>
      </div>
    </div>
  );
};

export default Hero;
