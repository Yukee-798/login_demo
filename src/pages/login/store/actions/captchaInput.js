import {
    BE_EMPTY_CAPTCHA,
    NOT_BE_EMPTY_CAPTCHA,
    LOADING,
    CANCEL_LOADING,
    COUNT_DOWN,
    COUNT_DOWN_END,
    ON_CAPTCHA_CHANGE
} from '../constant'

export const beEmptyCaptcha = data => ({type: BE_EMPTY_CAPTCHA, data});
export const notBeEmptyCaptcha = data => ({type: NOT_BE_EMPTY_CAPTCHA, data});
export const loading = data => ({type: LOADING, data});
export const cancelLoading = data => ({type: CANCEL_LOADING, data});
export const countDown = data => ({type: COUNT_DOWN, data});
export const countDownEnd = data => ({type: COUNT_DOWN_END, data});
export const onCaptchaChange = data => ({type: ON_CAPTCHA_CHANGE, data});