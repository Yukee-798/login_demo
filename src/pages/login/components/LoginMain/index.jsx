import React, { useRef, useState } from 'react';
import { Card, Button } from 'antd';
import PhoneLoginForm from './PhoneLoginForm'
import PwdLoginForm from './PwdLoginForm'
import { CaretRightOutlined} from '@ant-design/icons'

import './index.scss'


const LoginMain = (props) => {

    const {isPhoneLogin, setIsPhoneLogin} = props;

    // const isPhoneLogin = false;


    return (
        <Card 
            className='login-window-main'
            title={isPhoneLogin ? '欢迎使用力扣' : '账号密码登录'}
            bordered={false}
        >

            {isPhoneLogin ? <PhoneLoginForm /> : <PwdLoginForm />}
            


            <div className='link-button-warp'>
                <Button className='link-button' type='link' onClick={() => setIsPhoneLogin(!isPhoneLogin)}>
                    {isPhoneLogin ? '账号密码登录' : '验证码登录'}
                </Button>


                <Button className='link-button' type='link'>
                    {isPhoneLogin ? '邮箱注册' : '忘记密码'}
                </Button>
            </div>

            <div className='us-username' style={{display: isPhoneLogin ? 'flex' : 'none'}}>
                <span>已有美国站账号</span><CaretRightOutlined style={{fontSize: '12px', marginLeft: '2px'}}/>
            </div>
        </Card>
    )
}

export default LoginMain