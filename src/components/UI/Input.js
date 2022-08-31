import classes from './Input.module.css'

const Input = props =>{
     return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ...props.input will add every attribute-value pair to the input*/}
            <input {...props.input}/>
        </div>
     )
}

export default Input;