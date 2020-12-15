import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img src = "https://images.unsplash.com/photo-1540724487045-f220d0fe3861?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIxNTV9"
                        alt = "avatar"
                        className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Dennis Wu</h1>
                            <hr/>
                            <p>Ability | Ability | Ability | Ability</p>
                            <div className = "social-links">
                                {/* LinkedIn */}
                                <a href = "https://www.linkedin.com/in/denncc" target = "_blank" rel = "noopener noreferer" >
                                    <i style={{color:"white", fontSize: "5em", padding: "8px"}} 
                                    className = "fa fa-linkedin-square" aria-hidden = "true"/>
                                </a>

                                {/* GitHub */}
                                <a href = "https://github.com/denncc" target = "_blank" rel = "noopener noreferer" >
                                    <i style={{color:"white", fontSize: "5em", padding: "8px"}} 
                                    className = "fa fa-github-square" aria-hidden = "true"/>
                                </a>
                                {/* Medium */}
                                <a href = "https://medium.com/@denncc" target = "_blank" rel = "noopener noreferer" >
                                    <i style={{color:"white", fontSize: "5em", padding: "8px"}} 
                                    className = "fab fa-medium" aria-hidden = "true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;