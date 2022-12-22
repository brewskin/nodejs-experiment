

import React from 'react';
// import { Repo } from './api/services/repository';

class TopicList extends React.Component {
    renderSquare(i) {
        return <Topic value={this.props.topics[i]} />;
    }

    render() {
        return (
            <ul>
                <li>{this.renderSquare(0)}</li>
                <li>{this.renderSquare(1)}</li>
                <li>{this.renderSquare(2)}</li>
            </ul>
        );
    }
}

function Topic(props) {
    return (<p>{props.value}</p>)
}

export default TopicList;