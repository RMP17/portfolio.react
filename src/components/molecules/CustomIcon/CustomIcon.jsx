import React from "react";
import Icon from "@mdi/react";
import "./CustomIcon.scss"

const CustomIcon = (props) => (
    <div className="custom-icon">
        <Icon path={props.icon} size="3rem" />
    </div>
)
export default CustomIcon
