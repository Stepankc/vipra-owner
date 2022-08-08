import Post from "./post";
import '@styles/styles.css';
import '@styles/scss.scss';
import WebpackLogo from './assets/webpack-logo.png';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack title', WebpackLogo);
console.log('Post to String', post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack course</h1>
        <hr />
        <div className="logo"></div>
        <div className="box">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('root'))
