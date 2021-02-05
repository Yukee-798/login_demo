import { Input, Select,  } from 'antd'
import { useRef, useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
const { Option } = Select;

const PhoneInput = ({ value = {}, onChange }) => {

    // 被选中的号码前缀
    const [selectValue, setSelectValue] = useState('+86');

    // 输入的号码
    const [phoneNumber, setPhoneNumber] = useState('');


    const [isSelectMouseEnter, setIsSelectMouseEnter] = useState(false);
    const [isOpened, setIsOpened] = useState(false)

    const phoneInputRef = useRef();
    const selectRef = useRef();


    // 让当前控件 onChange 的时候与 Form.Item 产生交互
    const triggerChange = (changedValue) => {
        if (onChange) {
            onChange({
                phoneNumber,
                selectValue,
                ...value,
                ...changedValue
            });
        }
    };

    // 监控 Select 的变化
    const onSelectValueChange = (e) => {

        const newSelectValue = e;
        setSelectValue(newSelectValue);

        console.log(e);
        triggerChange({
            selectValue: newSelectValue,
        });
    };


    // 监听 phoneNumber 变化
    const onPhoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        console.log(newPhoneNumber);
        setPhoneNumber(newPhoneNumber);
        triggerChange({
            phoneNumber: newPhoneNumber
        });
    };






    // const handleSelectonChange = () => {
    //     console.log('select失去焦点');

    //     if (isOpened) {
    //         selectRef.current.focus()
    //         console.log('select获取焦点');
    //     }
    // }
    return (
        <>
            <Input
                className='phone-input'
                prefix={
                    <Select
                        bordered={false}
                        className='phone-input-select'
                        defaultValue='+86'
                        suffixIcon={<DownOutlined 
                                        rotate={isOpened ? 180 : 0} 
                                        onClick={() => setIsOpened(!isOpened)} 
                                        style={{ borderRight: '1px solid #D9D9D9', 
                                                paddingRight: '3px', fontSize: '10px', 
                                                color: isSelectMouseEnter ? '#2DB55D' : '#D9D9D9'}} 
                                    />}
                        ref={selectRef}
                        onMouseEnter={() => setIsSelectMouseEnter(true)}
                        onMouseLeave={() => setIsSelectMouseEnter(false)}

                        // 处理下拉框是否展开
                        onClick={() => setIsOpened(!isOpened)}

                        open={isOpened}
                        // options={options}   用 options 属性替换 Option 组件性能更好

                        onChange={onSelectValueChange}
                        // onChange={handleSelectonChange}
                        optionLabelProp='value'
                    
                        dropdownMatchSelectWidth={false}
                        
                        dropdownStyle={{width: '150px'}}
                    >
                        <Option key='1' value='+86'>中国(+86)</Option>
                        <Option key='2' value='+852'>中国香港(+852)</Option>
                        <Option key='3' value='+853'>中国香港(+853)</Option>
                        <Option key='4' value='+886'>中国台湾(+886)</Option>
                        <Option key='5' value='+1'>加拿大(+1)</Option>
                        <Option key='6' value='+1'>美国(+1)</Option>
                        <Option key='7' value='+33'>法国(+33)</Option>
                        <Option key='8' value='+44'>英国(+44)</Option>
                        <Option key='9' value='+49'>德国(+49)</Option>
                        <Option key='10' value='+60'>马来西亚(+60)</Option>
                        <Option key='11' value='+61'>澳大利亚(+61)</Option>
                        <Option key='12' value='+62'>印度尼西亚(+62)</Option>
                        <Option key='13' value='+64'>新西兰(+64)</Option>
                        <Option key='14' value='+65'>新加坡(+65)</Option>
                        <Option key='15' value='+66'>泰国(+66)</Option>
                        <Option key='16' value='+81'>日本(+81)</Option>
                        <Option key='17' value='+82'>韩国(+82)</Option>
                        <Option key='18' value='+91'>印度(+91)</Option>
                    </Select>
                }
                style={{ width: '100%' }}
                placeholder="输入手机号"
                ref={phoneInputRef}
                onChange={onPhoneNumberChange}
                type='tel'
            />
        </>
    )
}

export default PhoneInput