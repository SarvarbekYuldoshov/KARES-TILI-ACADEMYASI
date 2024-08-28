import React from 'react'
import "./Hover.css"
import { useTranslation } from 'react-i18next';
const Hover = () => {
    const {t} = useTranslation();
  return (
    <div className='hover'>
      <div className='container hover-container'>
          <iframe className='hover-img'  width="100%" height="600" src="https://www.youtube.com/embed/QTa-2HLK_Nw?si=AqPHnCmMHivjva3u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className='null'>
          <h1 className='hover-title'>{t("hover.hover_title")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hover