import React from "react";
import checkStyle from './cheackbox.module.css';
import { MdCheckBoxOutlineBlank, MdCheckBox  } from "react-icons/md";

function Checkbox({ children, checked, ...rest }){
    // ...rest는 name, onChange 같은 값을 그대로 input에 넣어주기 위함
    return(
        <>
            <div className={checkStyle.Checkbox}>
                <h2>Checkbox</h2>
                <span>{children}</span>
                <label>
                    <input type="checkbox" checked={checked} {...rest}></input>
                    <div className={checkStyle.icon} >
                        {checked ? (<MdCheckBox />) : (<MdCheckBoxOutlineBlank />)}
                    </div>
                </label>
            </div>
        </>
    )
}

export default Checkbox;