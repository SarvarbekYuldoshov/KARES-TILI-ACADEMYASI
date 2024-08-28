import React, { useState } from 'react';
import "./Home.css";
import Rasm_1 from "../images/rasm_5.png";
import Rasm_2 from "../images/rasm_6.png";
import Rasm_3 from "../images/rasm_7.png";
import Rasm_4 from "../images/rasm_8.png";
import Rasm_5 from "../images/rasm_9.png";
import Rasm_6 from "../images/rasm_10.png";
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Modal, message } from 'antd';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  
  const { t } = useTranslation();

  const sendMessage = () => {
    if (!name || !surname || !number) {
      message.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
    const chat_id = 6801549705;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "chat_id": chat_id,
        "text": messageText,
      }),
    })
      .then(res => res.json())
      .then(res => {
        message.success("Yuborildi");
        setOpen(false);
        setName("");
        setSurname("");
        setNumber("");
      })
      .catch(err => {
        console.error(err);
        message.error("Yuborishda xatolik yuz berdi");
      });
  };

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

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
          <Modal open={open} footer={null} onCancel={closeModal}>
            <Form>
              <Form.Item>
                <Input 
                  onChange={(e) => setName(e.target.value)} 
                  value={name}
                  className='home-input-a' 
                  placeholder='Ismingizni kiriting' 
                />
              </Form.Item>
              <Form.Item>
                <Input 
                  onChange={(e) => setSurname(e.target.value)} 
                  value={surname}
                  className='home-input-b' 
                  placeholder='Familiyangizni kiriting' 
                />
              </Form.Item>
              <Form.Item>
                <Input 
                  onChange={(e) => setNumber(e.target.value)} 
                  value={number}
                  className='home-input-c' 
                  placeholder='Raqamingizni kiriting' 
                />
              </Form.Item>
              <Button onClick={sendMessage}>Yuborish</Button>
            </Form>
          </Modal>
        </ul>
      </div>
    </div>
  );
};

export default Home;

