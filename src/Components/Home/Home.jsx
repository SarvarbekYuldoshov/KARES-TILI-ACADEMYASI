import React, { useState } from 'react'
import "./Home.css"
import Rasm_1 from "../images/rasm_5.png"
import Rasm_2 from "../images/rasm_6.png"
import Rasm_3 from "../images/rasm_7.png"
import Rasm_4 from "../images/rasm_8.png"
import Rasm_5 from "../images/rasm_9.png"
import Rasm_6 from "../images/rasm_10.png"
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Modal } from 'antd'
const Home = () => {
  const [open,setOpen] = useState(false) 
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
    const showModal = () => {
      setOpen(true)
    }
    const closModal = () => {
      setOpen(false)
    }
    const {t} = useTranslation();
  return (
    <div className='home'>
      <div className='container home-container'>
        <h1 className='home-title'>{t("home.home_title")}</h1>
        <ul className='home-list'>
          <li className='home-item'>
            <img className='home-img' src={Rasm_1} alt="" />
            <p className='home-text'>{t("home.home_text_1")}</p>
          </li>
          <li className='home-item'>
            <img className='home-img' src={Rasm_2} alt="" />
            <p className='home-text'>{t("home.home_text_2")}</p>
          </li>
          <li className='home-item'>
            <img className='home-img' src={Rasm_3} alt="" />
            <p className='home-text'>{t("home.home_text_3")}</p>
          </li>
          <li className='home-item'>
            <img className='home-img' src={Rasm_4} alt="" />
            <p className='home-text'>{t("home.home_text_4")}</p>
          </li>
          <li className='home-item'>
            <img className='home-img' src={Rasm_5} alt="" />
            <p className='home-text'>{t("home.home_text_5")}</p>
          </li>
          <li className='home-item'>
            <img className='home-img' src={Rasm_6} alt="" />
            <p className='home-text'>{t("home.home_text_6")}</p>
          </li>
        </ul>
        <ul className='home-list'>
            <Button className='home-btn' onClick={showModal}>{t("home.home_btn")}</Button>
             <Modal open={open} footer={null} onCancel={closModal}>
                  <Form>
                    <Form.Item>
                      <Input onChange={(e)=>setname(e.target.value)} className='home-input-a' placeholder='Ismingiz kiriting'  />
                    </Form.Item>
                    <Form.Item>
                      <Input onChange={(e)=>setSurname(e.target.value)} className='home-input-b' placeholder='Familiyangiz  kiriting' />
                    </Form.Item>
                    <Form.Item >
                      <Input onChange={(e)=>setNumber(e.target.value)} className='home-input-c' placeholder='Numberingiz  kiriting' />
                    </Form.Item>
                    <Button onClick={sendMessage}>Yuborish</Button>
                  </Form>
             </Modal>
        </ul>
      </div>
    </div>
  )
}

export default Home
