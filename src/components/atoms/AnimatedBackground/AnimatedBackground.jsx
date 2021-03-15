import React from "react"
import './AnimatedBackground.scss'

const AnimatedBackground = () => {

    const items = () => {
        const items = []
        for (let i = 0; i < 10; i++) {
            items.push(<li key={i} className="bg-bubbles__item"/>)
        }
        return items
    }

    return (<div className="wrapper">
        <ul className="bg-bubbles">
            {items()}
        </ul>
    </div>)
}

export default AnimatedBackground
