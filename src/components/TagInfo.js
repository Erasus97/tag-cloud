import React, { Component } from 'react';

class TagInfo extends Component {
    
    renderTypes = (pageTypes) => {
        const keys = Object.keys(pageTypes)
        return keys.map((val, i) => {
            return val + ( i >= keys.length - 1 ? ';' : ', ' )
        })
    }

    render() {
        const tag = this.props.tag
        return (
            <div className="tagInfo">
                <div>Label: {tag.label}</div>
                <div>Total Mentions: {tag.volume}</div>
                <div>Positive Mentions: {tag.sentiment.positive}</div>
                <div>Neutral Mentions: {tag.sentiment.neutral}</div>
                <div>Negative Mentions: {tag.sentiment.negative}</div>
                <div>Page Types: {this.renderTypes(tag.pageType)}</div>
            </div>
        );
    }
}

export default TagInfo;