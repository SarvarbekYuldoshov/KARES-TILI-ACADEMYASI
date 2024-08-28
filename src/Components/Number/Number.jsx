import React, { useState } from 'react';
import "./Number.css";
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm11.png";
import Marquee from 'react-fast-marquee';
import { Button, Form, Input, Modal, message } from 'antd';

const Number = () => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const { t } = useTranslation();

    const sendMessage = () => {
        form.validateFields()
            .then(values => {
                const { name, surname, number } = values;

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
                        "text": messageText
                    })
                })
                    .then(res => res.json())
                    .then(res => {
                        message.success("Yuborildi");
                        form.resetFields(); // Clear form fields
                        setOpen(false); // Close the modal
                    })
                    .catch(err => {
                        console.error(err);
                        message.error("Yuborishda xatolik yuz berdi");
                    });
            })
            .catch(() => {
                message.error("Iltimos, barcha maydonlarni to'ldiring.");
            });
    }

    const showModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div className='number'>
            <div className='container number-container'>
                <h1 className='number-title'>{t("number.number_title")}</h1>
                <ul className='number-list'>
                    <li className='number-item-a'>
                        <h2 className='number-title-a'>{t("number.number_text_1")}</h2>
                        <p className='number-text'>{t("number.number_text_2")}</p>
                        <Button className='number-btn' onClick={showModal}>{t("number.number_btn")}</Button>
                        <Modal open={open} footer={null} onCancel={closeModal}>
                            <Form form={form} layout="vertical">
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Ismingizni kiriting' }]}
                                >
                                    <Input className='home-input-a' placeholder='Ismingiz kiriting' />
                                </Form.Item>
                                <Form.Item
                                    name="surname"
                                    rules={[{ required: true, message: 'Familiyangizni kiriting' }]}
                                >
                                    <Input className='home-input-b' placeholder='Familiyangiz kiriting' />
                                </Form.Item>
                                <Form.Item
                                    name="number"
                                    rules={[{ required: true, message: 'Numberingiz kiriting' }]}
                                >
                                    <Input className='home-input-c' placeholder='Numberingiz kiriting' />
                                </Form.Item>
                                <Button onClick={sendMessage} type="primary">
                                    Yuborish
                                </Button>
                            </Form>
                        </Modal>
                    </li>
                    <li className='number-item-b'></li>
                    <Marquee direction="right" className='number-marqu'>
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                        <img className='number-img' src={Rasm_1} alt="" />
                    </Marquee>
                </ul>
            </div>
        </div>
    );
}

export default Number;
