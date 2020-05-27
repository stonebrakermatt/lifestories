import React from 'react'
import { Link } from 'react-router-dom';

export default class Title extends React.Component {
    render() {
        return (
            <h1 id="title">
                <Link to="/">stonebraker.io</Link>
            </h1>
        )
    }
}
