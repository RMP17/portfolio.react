import React,{Component} from "react";
import "./TextField.scss"

class TextField extends Component{

    render() {
        return (
            <input type="text" className="text-field" placeholder={this.props.placeholder}/>
        )
    }
}

export default TextField
