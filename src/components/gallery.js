import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0}
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>MongoDB</Tab>
                    <Tab>project 2</Tab>          
                </Tabs>
            </div>
        )
    }
}
export default Gallery;