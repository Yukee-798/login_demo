import './App.less'
import Login from './pages/login/Login'


import React from 'react';
import ResetPwdWindow from './pages/resetpassword/components/ResetPwdWindow';


const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

const App = () => {
    return (
        <Login />
        // <ResetPwdWindow />
        // <div
        //     style={{
        //         width: 330,
        //         margin: '200px auto 0 auto',
        //     }}
        // >
        //     <ProForm
        //         onFinish={async () => {
        //             await waitTime(2000);
        //             message.success('提交成功');
        //         }}
        //         submitter={{
        //             searchConfig: {
        //                 submitText: '登录',
        //             },
        //             render: (_, dom) => dom.pop(),
        //             submitButtonProps: {
        //                 size: 'large',
        //                 style: {
        //                     width: '100%',
        //                 },
        //             },
        //         }}
        //     >
        //         <ProFormText
        //             fieldProps={{
        //                 size: 'large',
        //                 prefix: <MobileTwoTone />,
        //             }}
        //             name="phone"
        //             placeholder="请输入手机号"
        //             rules={[
        //                 {
        //                     required: true,
        //                     message: '请输入手机号!',
        //                 },
        //                 {
        //                     pattern: /^1\d{10}$/,
        //                     message: '不合法的手机号格式!',
        //                 },
        //             ]}
        //         />
        //         <ProFormCaptcha
        //             fieldProps={{
        //                 size: 'large',
        //                 prefix: <MailTwoTone />,
        //             }}
        //             captchaProps={{
        //                 size: 'large',
        //             }}
        //             phoneName="phone"
        //             name="captcha"
        //             rules={[
        //                 {
        //                     required: true,
        //                     message: '请输入验证码',
        //                 },
        //             ]}
        //             placeholder="请输入验证码"
        //             onGetCaptcha={async (phone) => {
        //                 await waitTime(1000);
        //                 message.success(`手机号 ${phone} 验证码发送成功!`);
        //             }}
        //         />
        //     </ProForm>
        // </div>
    )
}





export default App