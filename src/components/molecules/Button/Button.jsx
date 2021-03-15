import React, {Component} from 'react';
import Icon from '@mdi/react';
import './Button.scss'
import classNames from 'classnames'
import {NavLink} from "react-router-dom";

class Button extends Component {
    constructor(props) {
        super(props)
        this.className = classNames({
            'button': true,
            'button--large': this.props.type === 'large' ,
            'border border_right': this.props.br, // border right
        });
    }

    default = () => (
        <div className={this.className}
             role="button"
             onClick={e => console.log('wwwwwww')}
             tabIndex="0"
        >
            {
                this.props.icon && <Icon path={this.props.icon} size='1.5rem'/>
            }
            <span>
                {this.props.children}
            </span>
        </div>
    )

    link = () => {

        return (
            <NavLink to={this.props.to} className={this.className + ' active'} activeClassName="button_active">
                {this.match && "> "}
                {this.props.icon && <Icon path={this.props.icon} size='1.5rem'/>}
                {
                    this.props.type==="large" ? this.props.children:<span>{this.props.children}</span>
                }
            </NavLink>
        )
    }

    large = () => {
        return (
            <div className={this.className}
                 role="button"
                 onClick={this.props.onClick}
                 tabIndex="0"
            >
                {this.props.children}
            </div>
        )
    }

    selectButton = () => {
        if (this.props.to) return this.link()
        switch (this.props.type) {
            case 'large':
                return this.large()
            default:
                return this.default()
        }
    }

    render() {

        return (
            this.selectButton()
        )
    }
}

export default Button
