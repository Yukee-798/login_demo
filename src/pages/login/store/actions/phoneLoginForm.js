import { BREAK_DEFALUT, KEEP_DEFALUT } from '../constant'

export const breakDefault = data => ({type: BREAK_DEFALUT, data});
export const keepDefault = data => ({type: KEEP_DEFALUT, data});