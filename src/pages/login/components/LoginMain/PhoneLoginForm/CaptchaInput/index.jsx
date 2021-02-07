import { Input, Button } from 'antd';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    beEmptyCaptcha, 
    notBeEmptyCaptcha, 
    loading, 
    cancelLoading, 
    countDown, 
    countDownEnd,
    onCaptchaChange
} from '../../../../store/actions/captchaInput'
import './index.scss'



const CaptchaInput = ({ onChange, value = {} }) => {
    const dispacth = useDispatch();

    const {captchaValue, isKeepDefault, isInvalid} = useSelector(allStates => ({
        isKeepDefault: allStates.phoneLoginForm.isKeepDefault,
        isInvalid: allStates.phoneInput.isInvalid,
        captchaValue: allStates.captchaInput.value
    }))



    const defOnChange = (e) => {
        const captchaValue = e.target.value;
        dispacth(onCaptchaChange(captchaValue));   
        triggerChange({
            captchaValue
        });

        const isEmpty = captchaValue === '';
        if (isEmpty) dispacth(beEmptyCaptcha());
        else dispacth(notBeEmptyCaptcha());
    }


    // 让当前控件 onChange 的时候与 Form.Item 产生交互
    const triggerChange = (changedValue) => {
        if (onChange) {
            onChange({
                captchaValue,
                ...value,
                ...changedValue
            });
        }
    };



    return (
        <Input className='captcha-input'
            placeholder='验证码'
            onChange={defOnChange}
            suffix={
                <Button
                    type='link'
                    loading={false}
                    disabled={isKeepDefault || isInvalid}
                >
                    获取验证码
                </Button>
            }
        />
    )
}

export default CaptchaInput