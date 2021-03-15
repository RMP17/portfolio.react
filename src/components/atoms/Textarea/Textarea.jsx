import React,{Component} from "react";
import "./Textarea.scss"

class Textarea extends Component{

    render() {
        return (
            <textarea className="textarea scroll" placeholder={this.props.placeholder}/>
        )
    }
}

export default Textarea
