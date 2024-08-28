import React, { useState } from 'react'
import "./Section.css"
import { Button, Form, Input, message } from 'antd'
import { useTranslation } from 'react-i18next'

const Section = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [number, setNumber] = useState("")

    const sendMessage = () => {
        if (!name || !surname || !number) {
            message.error("Barcha maydonlarni to'ldiring!");
            return;
        }

        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = 6801549705;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const msg = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "chat_id": chat_id,
                "text": msg
            })
        })
        .then(res => res.json())
        .then(res => {
            message.success("Yuborildi");
        })
        .catch(err => {
            console.error(err);
            message.error("Xatolik yuz berdi, qayta urinib ko'ring.");
        });
    }

    const { t } = useTranslation();

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
                            <Form.Item>
                                <Input
                                    onChange={(e) => setName(e.target.value)}
                                    className='section-input-a'
                                    placeholder='Ismingizni kiriting'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    onChange={(e) => setSurname(e.target.value)}
                                    className='section-input-b'
                                    placeholder='Familiyangizni kiriting'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    onChange={(e) => setNumber(e.target.value)}
                                    className='section-input-c'
                                    placeholder='Numeringizni kiriting'
                                />
                            </Form.Item>
                            <Button className='section-btn' onClick={sendMessage}>
                                Yuborish
                            </Button>
                        </Form>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Section;
