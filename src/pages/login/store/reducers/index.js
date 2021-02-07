import {combineReducers} from 'redux'
import loginMain from './loginMain'
import phoneLoginForm from './phoneLoginForm'
import phoneInput from './phoneInput'
import captchaInput from './captchaInput'

export default combineReducers(
    {
        // loginMain,
        phoneInput,
        captchaInput,
        phoneLoginForm

    }
)