import { BREAK_DEFALUT, KEEP_DEFALUT } from '../constant'
const initState = {isKeepDefault: true}

export default function phoneLoginForm(state = initState, action) {
    const {type} = action;

    switch (type) {
        case KEEP_DEFALUT: 
            return {isKeepDefault: true}
        case BREAK_DEFALUT: 
            return {isKeepDefault: false}
        default:
            return initState
    }
}