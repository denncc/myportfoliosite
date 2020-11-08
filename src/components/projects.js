import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';



class Projects extends Component {
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
                    <Tab>project 3</Tab>
                    <Tab>project 4</Tab>
                    <Tab>project 5</Tab>
                    <Tab>project 6</Tab>
                    <Tab>project 7</Tab>                    
                </Tabs>
            </div>
        )
    }
}
export default Projects;