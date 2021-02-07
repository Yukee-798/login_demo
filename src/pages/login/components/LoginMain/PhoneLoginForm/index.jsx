import { Form, Button } from 'antd';
import React from 'react';
import PhoneInput from './PhoneInput'
import CaptchaInput from './CaptchaInput'

import { InvalidPhoneNumber, EmptyPhoneNumber, EmptyCaptcha} from './ErrorInfo'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';

import {breakDefault, keepDefault} from '../../../store/actions/phoneLoginForm.js'


const PhoneLoginForm = () => {
    const [form] = Form.useForm();


    const {
            isKeepDefault, 
            isInValidPhoneNumber, 
            isPhoneEmpty, 
            isCaptchaEmpty, 
            isPhoneInputOnBlur
        } = useSelector(allStates => ({
        isKeepDefault: allStates.phoneLoginForm.isKeepDefault,
        isInValidPhoneNumber: allStates.phoneInput.isInvalid,
        isPhoneEmpty: allStates.phoneInput.isEmpty,
        isCaptchaEmpty: allStates.captchaInput.isEmpty,
        isPhoneInputOnBlur: allStates.phoneInput.isOnBlur
    }))


    const dispacth = useDispatch()



    /* 

        需求：
            1. 用户在输入完手机号，并且失去该输入框焦点的时候，检测输入的手机号是否正确
                * 正确的手机号需要将输入框的背景变淡蓝色，并且使获取验证码的按钮解除 disabled
                * 输入错误的时候提示：error
                    * 用户再次进行输入的时候取消 error 保持默认状态
                
            2. 用户在点击按钮的检测手机号输入框和验证码输入框是否为空
                * 如果为空提示：error


    
    
    */


    // 将表单填入的信息提交
    const onFinish = (values) => {
        
        console.log('表单提交的values:', values);

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
                captcha: {
                    captchaValue: ''
                }
            }}
        >
            <Form.Item
                style={
                    isKeepDefault ? { marginBottom: '24px'/* , backgroundColor: '#E8F0FE' */} :
                    isPhoneEmpty ? {marginBottom: '40px'} :
                    isInValidPhoneNumber ? {marginBottom: '40px'} :
                    {marginBottom: '24px'/* , backgroundColor: '#E8F0FE' */}
                }
                className='phone-login-form-item phone-input-item'
                name='phone'
                help={
                    isKeepDefault ? <></> :
                    isPhoneEmpty ? <EmptyPhoneNumber /> :
                    isInValidPhoneNumber ? <InvalidPhoneNumber /> :
                    <></>
                }              
            >
                <PhoneInput />
            </Form.Item>

           

            <Form.Item
                style={
                    isKeepDefault ? { marginBottom: '24px' } : 
                    isCaptchaEmpty ? { marginBottom: '40px' } : { marginBottom: '24px' }
                }
                className='phone-login-form-item captcha-input-item'
                name="captcha"
                help={
                    isKeepDefault ? <></> :
                    isCaptchaEmpty ? <EmptyCaptcha /> :
                    <></>
                }
            >
                <CaptchaInput />
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


