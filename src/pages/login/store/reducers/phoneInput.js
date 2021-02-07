import {
    BE_EMPTY_NUMBER,
    NOT_BE_EMPTY_NUMBER,
    BE_INVALID_NUMBER,
    NOT_BE_INVALID_NUMBER,
    BE_ON_BLUR,
    NOT_BE_ON_BLUR,
    ON_PHONE_CHANGE,
    ON_SELECT_CHANGE
} from '../constant'

const initState = {
    isEmpty: true, 
    isInvalid: true, 
    isOnBlur: true, 
    inputValue: '', 
    selectValue: '+86'
}

export default function phoneInput(state = initState, action) {
    const {type, data} = action;
    switch (type) {
        case BE_EMPTY_NUMBER: 
            return {...state, isEmpty: true};
        case NOT_BE_EMPTY_NUMBER:
            return {...state, isEmpty: false};
        case BE_INVALID_NUMBER:
            return {...state, isInvalid: true};
        case NOT_BE_INVALID_NUMBER:
            return {...state, isInvalid: false};
        case BE_ON_BLUR:
            return {...state, isOnBlur: true};
        case NOT_BE_ON_BLUR:
            return {...state, isOnBlur: false};
        case ON_PHONE_CHANGE:
            return {...state, inputValue: data};
        case ON_SELECT_CHANGE:
            return {...state, selectValue: data};
        default:
            return initState;
    }
}