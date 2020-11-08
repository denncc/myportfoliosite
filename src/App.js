import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="Title" scroll style = {{ color:"#284b63"}}>
            <Navigation>
                <Link to = "/" style = {{ color:"#284b63"}}>Home</Link>
                <Link to = "/resume" style = {{ color:"#284b63"}}>Resume</Link>
                <Link to = "/aboutme" style = {{ color:"#284b63"}}>About Me</Link>
                <Link to = "/projects" style = {{ color:"#284b63"}}>Projects</Link>
                <Link to = "/contacts" style = {{ color:"#284b63"}}>Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" >
            <Navigation>
            <Link to = "/">Home</Link>
                <Link to = "/resume">Resume</Link>
                <Link to = "/aboutme">About Me</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
