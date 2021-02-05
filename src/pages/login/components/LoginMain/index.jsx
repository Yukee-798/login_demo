import React, { useRef, useState } from 'react';
import { Card, Button } from 'antd';
import PhoneLoginForm from './PhoneLoginForm'

import './index.scss'


const LoginMain = () => {

    const isPhoneLogin = true;

    // const isPhoneLogin = false;


    return (
        <Card className='login-window-main'
            title={isPhoneLogin ? '欢迎使用力扣' : '账号密码登录'}
            bordered={false}
        >
            <PhoneLoginForm />
            <div>
                <Button type='link'>账号密码登录</Button>
                <Button type='link'>邮箱注册</Button>
            </div>
        </Card>
    )
}

export default LoginMain