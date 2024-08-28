import React, { useState } from 'react'
import "./Close.css"
import Rasm_1 from "../images/rasm1.png"
import Rasm_2 from "../images/rasm2.png"
import Rasm_3 from "../images/rasm3.png"
import { useTranslation } from 'react-i18next'
import { Button, Form, Input, Modal } from 'antd'
const Close = () => {
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
    <div className='close'>
      <div className='container close-container'>
        <h1 className='close-title'>{t("close.close_text")}</h1>
        <div className='menu'>
            <ul className='close-list'>
                <img className='close-img' src={Rasm_1} alt="" />
                <li className='close-item'>
                    <h2 className='close-title-a'>{t("close.close_text_1")}</h2>
                    <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                        <Modal open={open} footer={null} onCancel={closModal}>
                            <Form>
                                <Form.Item label="Ismingiz">
                                <Input onChange={(e)=>setname(e.target.value)} className='home-input' placeholder='Ismingiz kiriting'  />
                                </Form.Item>
                                <Form.Item label="Familiyangiz">
                                <Input onChange={(e)=>setSurname(e.target.value)} className='home-input' placeholder='Familiyangiz  kiriting' />
                                </Form.Item>
                                <Form.Item label="Numberingiz">
                                <Input onChange={(e)=>setNumber(e.target.value)} className='home-input' placeholder='Numberingiz  kiriting' />
                                </Form.Item>
                                <Button onClick={sendMessage}>Yuborish</Button>
                            </Form>
                        </Modal>
                </li>
                <p className='close-text'>{t("close.close_text_2")}</p>
                <li className='close-item'>
                <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                    <Modal open={open} footer={null} onCancel={closModal}>
                        <Form>
                            <Form.Item label="Ismingiz">
                            <Input onChange={(e)=>setname(e.target.value)} className='home-input' placeholder='Ismingiz kiriting'  />
                            </Form.Item>
                            <Form.Item label="Familiyangiz">
                            <Input onChange={(e)=>setSurname(e.target.value)} className='home-input' placeholder='Familiyangiz  kiriting' />
                            </Form.Item>
                            <Form.Item label="Numberingiz">
                            <Input onChange={(e)=>setNumber(e.target.value)} className='home-input' placeholder='Numberingiz  kiriting' />
                            </Form.Item>
                            <Button onClick={sendMessage}>Yuborish</Button>
                        </Form>
                    </Modal>
                    <p className='close-text-a'>970.000 so’m /oy </p>
                </li>
            </ul>
            <ul className='close-list'>
                <img className='close-img' src={Rasm_2} alt="" />
                <li className='close-item'>
                    <h2 className='close-title-a'>{t("close.close_text_3")}</h2>
                    <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                        <Modal open={open} footer={null} onCancel={closModal}>
                            <Form>
                                <Form.Item label="Ismingiz">
                                <Input onChange={(e)=>setname(e.target.value)} className='home-input' placeholder='Ismingiz kiriting'  />
                                </Form.Item>
                                <Form.Item label="Familiyangiz">
                                <Input onChange={(e)=>setSurname(e.target.value)} className='home-input' placeholder='Familiyangiz  kiriting' />
                                </Form.Item>
                                <Form.Item label="Numberingiz">
                                <Input onChange={(e)=>setNumber(e.target.value)} className='home-input' placeholder='Numberingiz  kiriting' />
                                </Form.Item>
                                <Button onClick={sendMessage}>Yuborish</Button>
                            </Form>
                        </Modal>
                </li>
                <p className='close-text'>{t("close.close_text_4")}</p>
                <li className='close-item'>
                <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                    <Modal open={open} footer={null} onCancel={closModal}>
                        <Form>
                            <Form.Item label="Ismingiz">
                            <Input onChange={(e)=>setname(e.target.value)} className='home-input' placeholder='Ismingiz kiriting'  />
                            </Form.Item>
                            <Form.Item label="Familiyangiz">
                            <Input onChange={(e)=>setSurname(e.target.value)} className='home-input' placeholder='Familiyangiz  kiriting' />
                            </Form.Item>
                            <Form.Item label="Numberingiz">
                            <Input onChange={(e)=>setNumber(e.target.value)} className='home-input' placeholder='Numberingiz  kiriting' />
                            </Form.Item>
                            <Button onClick={sendMessage}>Yuborish</Button>
                        </Form>
                    </Modal>
                    <p className='close-text-a'>970.000 so’m /oy </p>
                </li>
            </ul>
            <ul className='close-list'>
                <img className='close-img' src={Rasm_3} alt="" />
                <li className='close-item'>
                    <h3 className='close-title-a'>{t("close.close_text_5")}</h3>
                    <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                        <Modal open={open} footer={null} onCancel={closModal}>
                            <Form>
                                <Form.Item label="Ismingiz">
                                <Input onChange={(e)=>setname(e.target.value)} className='home-input' placeholder='Ismingiz kiriting'  />
                                </Form.Item>
                                <Form.Item label="Familiyangiz">
                                <Input onChange={(e)=>setSurname(e.target.value)} className='home-input' placeholder='Familiyangiz  kiriting' />
                                </Form.Item>
                                <Form.Item label="Numberingiz">
                                <Input onChange={(e)=>setNumber(e.target.value)} className='home-input' placeholder='Numberingiz  kiriting' />
                                </Form.Item>
                                <Button onClick={sendMessage}>Yuborish</Button>
                            </Form>
                        </Modal>
                </li>
                <p className='close-text'>{t("close.close_text_6")}</p>
                <li className='close-item'>
                <Button className='close-btn' onClick={showModal}>{t("home.home_btn")}</Button>
                    <Modal open={open} footer={null} onCancel={closModal}>
                        <Form>
                            <Form.Item>
                            <Input onChange={(e)=>setname(e.target.value)} className='home-input-a' placeholder='Ismingiz kiriting'  />
                            </Form.Item>
                            <Form.Item >
                            <Input onChange={(e)=>setSurname(e.target.value)} className='home-input-b' placeholder='Familiyangiz  kiriting' />
                            </Form.Item>
                            <Form.Item>
                            <Input onChange={(e)=>setNumber(e.target.value)} className='home-input-c' placeholder='Numberingiz  kiriting' />
                            </Form.Item>
                            <Button onClick={sendMessage}>Yuborish</Button>
                        </Form>npm 
                    </Modal>
                    <p className='close-text-a'>970.000 so’m /oy </p>
                </li>
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default Close