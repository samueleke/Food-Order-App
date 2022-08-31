import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ...props.input will add every attribute-value pair to the input*/}
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input;