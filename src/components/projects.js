import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardButton, Button, CardMenu, IconButton, CardText } from 'react-mdl';



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
                </Tabs>
                <Grid className>
                    <Cell col = {12}>
                        <div classNmae = "content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className = "project-grid">
                    {/* Project 1*/}
                    <Card shadow = {5} style = {{minWidth: "450", margin: "auto"}}>
                        <CardTitle style = {{color: "#black", height: "176px", background:
                        "url(data:image/png;base64,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) center / cover"}}>
                        MongoDB Project #1
                        </CardTitle>
                            <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tortor nec volutpat eleifend. Morbi nec varius metus. Duis neque leo, gravida quis facilisis nec, volutpat et augue. Suspendisse mattis congue orci, at ultricies felis cursus vitae. Morbi fermentum purus vel mi tempus, ut lobortis ex tincidunt. Etiam dapibus in diam quis convallis. Curabitur ac odio euismod turpis vestibulum ultricies ac vel odio. Morbi scelerisque venenatis lacus, non scelerisque erat pretium vel. Donec condimentum turpis eu laoreet semper. Proin ut leo mauris. Curabitur aliquam, orci et hendrerit placerat, erat est aliquam sapien, eu viverra lorem est vel justo. Aliquam erat volutpat.
                            </CardText>
                        <CardActions>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style = {{color: "#fff"}}>
                            <IconButton name = "share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow = {5} style = {{minWidth: "450", margin: "auto"}}>
                        <CardTitle style = {{color: "#black", height: "176px", background:
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAA81BMVEX////Bv76+vLtIR0lFREZBQEJEmkX4+PhClkRFnEU8Oz1Ipkn8/PxDl0RMqEpCQUPNy8tGn0ZVrE3z8/N4eHlLSky1tbY5ODru7e3U09KrqqtXVlhbr0/m5uXb2tlwb3FjYmSPj5BdXF4yMTOGhoeXlpfc7Nzs9ezR59I0nzmioqN9fX6bw5xxcXLHxsWvr6+n0p5/vH7Y69VSrUJltFxosWeJwIi927yy17A/nT5DpT9vsm8ylzLw9/AwkzErnDElIyZXoFhzrnQzjzeKuoxZrV1Ik0dVlE9pmFxwp2GEn3CBp26mq4qUp3q6tJvc2MvNy7S9nPAPAAAIRElEQVR4nO2aaZebOBaGAUlxlYoYXBgLmwJjY9eCx7iXyVI1STqddGbrnqT//68ZCS1g43Ql57RN3Oc+H+oIBFh6ubqLKMsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4lJuuB3CafHfd9QhOkZur77sewglyfXV1d9v1IE6OH66uri7uwb19Hdc/VrINQLev4eZKcDG4H7zueiinxN+VbIP7Z27XYzkdvvuxkq0/4Pb2vOvBnAy3D5dKNs6rF10P51S4vLzUi1QAYeGLePmgZJOq3UPW+yW8vuwrc+tL3V5BkfUFCGOTsg2Uuf2j6yGdApWxNWUbvIIi61Fu7/paNy0beLfHef5Qy3auzQ1qhUdwP1z0+/3a2s4F9y+7Hta3zvWDku1SWJtiAEHhEV7uk+0cdpAe4XklW39HtjdQYf0xHy4ujLk1rK3Lgj5IkkiQSKJes1N2yd4o6Gy75q4l2xPO+ZOuxsODlO3sUKaB7oxGWz32OPijRx2M1z81ZasUk6u0k9FIgii1BakwqXHJxXGcsbIrN0jGjm074yRJx7ZoJV0M8VpZW7+xSIV4b7qNCQkXpFTtoNKprJdqySWtjnpVTxf2ditk05lbZW2SN92W8z2uh2+Oosr4jB/ztWyyOT766BqyCd2+IdnspmxW4DSPG7JFwio7iAunIVslj/FiDdlcu0vZ1CodPP1WZbPGYpmq9o5svnV8ro1sfS3bU8F2SJDv0zWv1W2/YLe3e646doNe68o9d++ebMkmlqkTyXZDNn66k1BaJSC1bIY39Swif5bxv8UchzMRtYJNhsPp1qTSZYa9cDqqJYrK2bxnJbOQ4lVzXq6zQjTMipS3E/2MchF7OF6V9WUt2UT4dFLZbMg2dpwujM2yLi7qVdqQTae76XruUbq2ijxnHqZxYNleTj3ssZF5RDLN0WoVM4+GcmLpMMaUzt0lYwQjwlJzqR3mi8mCEEribJ5vqnN+nMerNaIem0b6urZsItdQMdPI5qZOJ3GU8/29trZ+U7Z3qjtaxhThbIoKZ5MRRIaLt9OiWDOEcuOhCZsJ27QRxqya6zhjHkLzaT5dDD0P4Vhb4SZnYppJjBFmOQ3kuVy8gV7BkBfqHKwtW1qnJEK20vf9kqe7447Kqxd3tbkNzqRmZ2fvGxtuCw/RUTW6tYdIVpmOQxFZyu6EkaFspQxhIhVKMm5la2E80dRDTDnzhJJF1RgzRFVd5DBayN4Rf6Z60h7ZGgmwbytE/WCPW87zGNw0ZDs/E5IJ3jcCqUO9tWwlBDE1mYWHM/mi1x7TC2VCkdZgQnAo5xMwRGby5IxQR7YQl61quBQjbWJDLrB61H7ZGtbWE0EoqqoEu5Oy9Nl9QzbF058bts9l00aQYT1vn2G5olKKmL44CDHOZJPLppfmFOOpbM0xLfU5Kn3jiOrOygaVNX5Gtl3fxn9xu344Ii/u2rK9/1vjAruWbeip2YoFKa1kQ1FoLuXrGUu33pBNGKZsxVos/iAmBVx53sLcLtygbO31bXsiqUxMUqsDHswqfaJl28raGrItGrIpa1uShmxilcpI0ZSNaNl4lqKeFGMvUqdILduaO0TZasvm783bZITtJAd5aeorI9u7Zv9e2RIt24wg3LgUUfnqG7LNjGxcVZbIu6l0d+4ceytzO3/WZ2Vz9lYJ23slR8X9oK3t6Vk7IDwmG7e23PjkkiKvtUhr2YTvi7luvSlT8UQ4vsz80pLHEdlqyZbUa3Rbtqgra7NudaWgVftlq9vZkk2FBCMbTxuYX1+KY6nHXtmsFFPMsjXLC33HgmhvWB1o02vJVjZK9l1rc6pQIfbJjxsbnt9ty7b966NatlVbtoQbmPFOBdG5RrFXNl6YUZwNR0YokQBSU29kmKnH93ZsSAQEc9Oub6s2KqMgTXvHLU/VMr38p1Rt5z9ARiZvE5FUzcuEBD5X7c9EDqdrh23Z5vpZwRLVkgl6PEXWIcVl5p5gex8t2arYy8aWbk8bW2KlVtrbfvihkTnvh3+1kg/Bpk6tTLpVySanOM5N9TSmTJUOwk01ZFNpheUgXbYaijpZK2iuLSxq5hUuL9jtWhCxWeSoFC4odTOxfN+1jiub3HZ79m+h2rudroibUyhfdRryuFeNrMcjAVEbHqKYjMV8fS9XS7QqrjypQSDqLF+W3jEvVWm2XsyKkfkYNeTLdM2f726Y3h4IorKqncpUfPDznfoLjOgTKUf1DSZJhJ5KXG5tSRAdu9B6wcPCf/7bVi1CjFFKGU6tElctNg+EXfBmrkrIEaGExVmch3raMaWEEIYKyw2JaOZkIjrKHCOEPY8QStFG/cSMP4rOszCfaxNqfe+r1djps01XkARWcvytt9uHh19/e9+ytWA5GY1Gm8kystJlMdlsJsXEtcrJRpwtlKMLRqsszmbGGQXDxUwwtC13WjUXQ5lbpVNCxXvwMMK51i0phvN4ujRbQEGapIadr8sBt7G6r1mN9pKki+L0+uF/H3/d9WtfzL4d2z2Mw6GfjsvRIiRIp7Zfcfu3yM1vHz8d+CeKtzphc3nClnfyZfhP5/ePB/5vwEW+Nm03xvmR496B+PTxsIGozOmmPlqR8POXnhKffj+sh1kSvSMsyNjm85eeEsmBZXN4RWDcWZlnpxsGtogOLJuLMQ5VHWDncTf/YvXn0/t04Pefeh5m8awoFuHbWSdfTk6TZC3KjDxnw44+b54qUemMHP+vkXkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBK/B927MIEDnqC6gAAAABJRU5ErkJggg==) center / cover"}}>
                        MongoDB Project #2
                        </CardTitle>
                            <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tortor nec volutpat eleifend. Morbi nec varius metus. Duis neque leo, gravida quis facilisis nec, volutpat et augue. Suspendisse mattis congue orci, at ultricies felis cursus vitae. Morbi fermentum purus vel mi tempus, ut lobortis ex tincidunt. Etiam dapibus in diam quis convallis. Curabitur ac odio euismod turpis vestibulum ultricies ac vel odio. Morbi scelerisque venenatis lacus, non scelerisque erat pretium vel. Donec condimentum turpis eu laoreet semper. Proin ut leo mauris. Curabitur aliquam, orci et hendrerit placerat, erat est aliquam sapien, eu viverra lorem est vel justo. Aliquam erat volutpat.
                            </CardText>
                        <CardActions>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style = {{color: "#fff"}}>
                            <IconButton name = "share"></IconButton>
                        </CardMenu>
                    </Card>
                    {/* Project 3*/}
                    <Card shadow = {5} style = {{minWidth: "450", margin: "auto"}}>
                        <CardTitle style = {{color: "#black", height: "176px", background:
                        "url(data:image/png;base64,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) center / cover"}}>
                        MongoDB Project #3
                        </CardTitle>
                            <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tortor nec volutpat eleifend. Morbi nec varius metus. Duis neque leo, gravida quis facilisis nec, volutpat et augue. Suspendisse mattis congue orci, at ultricies felis cursus vitae. Morbi fermentum purus vel mi tempus, ut lobortis ex tincidunt. Etiam dapibus in diam quis convallis. Curabitur ac odio euismod turpis vestibulum ultricies ac vel odio. Morbi scelerisque venenatis lacus, non scelerisque erat pretium vel. Donec condimentum turpis eu laoreet semper. Proin ut leo mauris. Curabitur aliquam, orci et hendrerit placerat, erat est aliquam sapien, eu viverra lorem est vel justo. Aliquam erat volutpat.
                            </CardText>
                        <CardActions>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style = {{color: "#fff"}}>
                            <IconButton name = "share"></IconButton>
                        </CardMenu>
                    </Card>
                    
                </div>                
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Project</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Project</h1></div>
            )
        }
    }
}
export default Projects;