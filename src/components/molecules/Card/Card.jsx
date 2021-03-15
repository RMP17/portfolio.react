import React, {Component} from "react";
import classNames from 'classnames'
import './Card.scss'

class Card extends Component{

    static Header = props => (
        <div className="w100p">{props.children}</div>
    )
    static Body = props => (
        <div className="w100p card__body scroll">{props.children}</div>
    )

    static Footer = props => (
        <div className="card__footer">{props.children}</div>
    )
    render() {
        const props = this.props;
        const _classNames = classNames({
            'card': true,
            'theme': true,
            'card_border': !props.noBorder,
            'p-0': props.noPadding // padding none
        });
        return (
            <div className={_classNames}>
                {props.children}
            </div>
        )
    }
}
export default Card
