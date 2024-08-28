import React, { useState } from 'react'
import "./Section.css"
import { Button, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
const Section = () => {
    const [name,setname] = useState("")
    const [surname,setSurname] = useState("")
    const [number,setNumber] = useState("")
    const sendMessage = () =>{
       const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo",
       chat_id = 6801549705
       const url = `https://api.telegram.org/bot${token}/sendMessage`
       const message = `Ism ${name}\nFamiliya ${surname}\Number${number}`
       fetch(
        url,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            "chat_id":chat_id,
            "text":message
            })
        }
      ).then(res=>res.json()).then(res=>{
        alert("Yuborildi")
      }).catch(err=>console.log(err))
    }
    const {t} = useTranslation();
  return (
    <div className='section'>
      <div className='container section-container'>
          <ul className='section-list'>
            <li className='section-item'>
                <h1 className='section-title'>{t("section.section_title")}</h1>
                <p className='section-text'>{t("section.section_text")}</p>
            </li>
            <li className='section-item'>
                <Form>
                        <Form.Item >
                        <Input onChange={(e)=>setname(e.target.value)} className='section-input-a' placeholder='Ismingiz kiriting'  />
                        </Form.Item>
                        <Form.Item >
                        <Input onChange={(e)=>setSurname(e.target.value)} className='section-input-b'placeholder='Familiyangiz  kiriting' />
                        </Form.Item>
                        <Form.Item>
                        <Input onChange={(e)=>setNumber(e.target.value)} className='section-input-c'placeholder='Numberingiz  kiriting' />
                        </Form.Item>
                        <Button className='section-btn'  onClick={sendMessage}>Yuborish</Button>
                    </Form>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Section
