import { message, Card, Form, Button } from 'antd';
import React, { useRef, useState } from 'react';
import PhoneInput from './PhoneInput'
import CaptchaInput from './CaptchaInput'

import { InvalidPhoneNumber, EmptyPhoneNumber, EmptyCaptcha} from './ErrorInfo'
import './index.scss'

const PhoneLoginForm = () => {
    const [form] = Form.useForm();

    const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);
    const [isEmptyPhoneNumber, setIsEmptyPhoneNumber] = useState(false);
    const [isEmptyCaptcha, setIsEmptyCaptcha] = useState(false);


    // const [isPhoneInputOnBlur, setIsPhoneInputOnBlur] = useState(true)
    // const [isCaptchaInputOnBlur, setIsCaptchaInputOnBlur] = useState(true)

    let phoneNumber = '';



    /* 
        待完成：
            
            1. 建议看一下 useContext 和 useMemo
            2. 处理以下 Error 提醒的逻辑
                (1) 实时获取 PhoneLoginInput 和 CaptchaInput 输入的内容
                        * 当输入内容均为空，并且点击了 Primary Btn 则 isEmpty = true
                        * 当 PhoneLoginInput 为错误号码，并且点击了 Primary Btn 则 isValidPhoneNumber = true
    
    
    
    */



    // 将表单填入的信息提交
    const onFinish = (values) => {
        console.log('表单提交的values:', values);
    }


    // 每次 PhoneInput 改变的时候回调该方法用于检测手机号格式
    const checkPhone = (_, value) => {

        const  reg = /^1[3-9][0-9]{9}$/g;
        phoneNumber = value.phoneNumber;

        setIsInvalidPhoneNumber(!reg.test(phoneNumber));


        return Promise.resolve();
    }

    return (
        <Form 
            className='phone-login-form' 
            name='phone_login_form'
            onFinish={onFinish}
            form={form}
            initialValues={{
                phone: {
                    selectValue: '+86',
                    phoneNumber: ''
                },
                captcha: {}
            }}
        >
            <Form.Item
                style={
                    isEmptyPhoneNumber ? {marginBottom: '40px'} :
                    isInvalidPhoneNumber ? {marginBottom: '40px'} :
                    {marginBottom: '24px'}
                }
                className='phone-login-form-item phone-input-item'
                name='phone'
                
                rules={[
                    {
                        validator: checkPhone
                    }
                ]}
                help={
                    isEmptyPhoneNumber ? <EmptyPhoneNumber /> :
                    isInvalidPhoneNumber ? <InvalidPhoneNumber /> :
                    <></>
                }              
            >
                <PhoneInput />
            </Form.Item>

           

            <Form.Item
                style={
                    isEmptyCaptcha ? { marginBottom: '40px' } : { marginBottom: '24px' }
                }
                className='phone-login-form-item captcha-input-item'
                name="captcha"
                help={
                    isEmptyCaptcha ? <EmptyCaptcha /> :
                    <></>
                }
            >
                <CaptchaInput isInValidPhoneNumber={isInvalidPhoneNumber}/>
            </Form.Item>

           

            <Form.Item 
                className='phone-login-form-item primary-button-item'
            >
                <Button className='primary-button' type='primary' htmlType='submit' style={{ width: '100%' }}>登录 / 注册</Button>
            </Form.Item>
        </Form>
    )
}

export default PhoneLoginForm


