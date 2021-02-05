import { Input, Button } from 'antd';
import './index.scss'

const CaptchaInput = () => {
    return (
        <Input className='captcha-input'
            placeholder='验证码' 
            suffix={
                <Button type='link' 
                        // loading={true}
                >
                    获取验证码
                </Button>
            } 
        />
    )
}

export default CaptchaInput