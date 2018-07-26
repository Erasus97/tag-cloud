import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class TagCloud extends Component {

    render() {
        return (
            <div className="tagCloud">
                {
                    this.props.list.map((val) => {
                        return <Link style={{fontSize: val.sentimentScore/2}} key={val.id} to={val.id}> {val.label} </Link>
                    })
                }
            </div>
        );
    }
}

export default TagCloud;