import React , {forwardRef} from 'react'
import classes from './Input.module.css'

export const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} type="text" {...props.input}/>
    </div>
  )
})
