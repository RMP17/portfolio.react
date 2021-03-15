import React from "react";
import './ButtonGroup.scss'
const ButtonGroup=(props)=>(
    <div className="button-group border">
        {props.children}
    </div>
)
export default ButtonGroup
