import React from 'react'
import "./Model.css"
import Rasm_1 from "../images/rasm11.png"
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
const Model = () => {
    const {t} = useTranslation();
  return (
    <div className='model'>
      <div className='container model-container'>
        <h1 className='model-title'>{t("model.model_title")}</h1>
      </div>
      <Marquee direction="right" className='model-marquee'>
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
        </Marquee>
        <Marquee direction="left" className='model-marquee'>
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
            <img className='model-img' src={Rasm_1} alt="" />
        </Marquee>
    </div>
  )
}

export default Model
