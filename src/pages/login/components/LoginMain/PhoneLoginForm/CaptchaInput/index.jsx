import { Input, Button } from 'antd';
import { useEffect } from 'react';
import './index.scss'


/* 
    实现思路：
        1. Phone



*/


const CaptchaInput = (props) => {
    const { isInValidPhoneNumber} = props;



    console.log(isInValidPhoneNumber);
    useEffect(() => {
        

        return () => {
            
        };
    }, []);



    return (
        <Input className='captcha-input'
            placeholder='验证码' 
            suffix={
                <Button 
                    type='link' 
                    loading={false}
                    disabled={isInValidPhoneNumber}
                >
                    获取验证码
                </Button>
            } 
        />
    )
}

export default CaptchaInput