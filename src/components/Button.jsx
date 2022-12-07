import React from 'react';
import { styles } from './buttonStyles';


const Button = (props) => {
    console.log(styles.dark);
    return (
        <>
        <button  className={props.className}>
            Empezar
        </button>
        </>
    );
};
export default Button;
// 