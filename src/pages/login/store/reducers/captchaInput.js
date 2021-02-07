import {
    BE_EMPTY_CAPTCHA,
    NOT_BE_EMPTY_CAPTCHA,
    LOADING,
    CANCEL_LOADING,
    COUNT_DOWN,
    COUNT_DOWN_END,
    ON_CAPTCHA_CHANGE
} from '../constant'


const initState = {
    isEmpty: true, 
    isLoading: false, 
    isCountDown: false, 
    value: ''
}


export default function captchaInput(state = initState, action) {
    const {type, data} = action;
    switch (type) {
        case BE_EMPTY_CAPTCHA:
            return {...state, isEmpty: true};
        case NOT_BE_EMPTY_CAPTCHA:
            return {...state, isEmpty: false};
        case LOADING: 
            return {...state, isLoading: true};
        case CANCEL_LOADING:
            return {...state, isLoading: false};
        case COUNT_DOWN: 
            return {...state, isCountDown: true};
        case COUNT_DOWN_END:
            return {...state, isCountDown: false};
        case ON_CAPTCHA_CHANGE:
            return {...state, value: data};
        default:
            return initState;
    }
}