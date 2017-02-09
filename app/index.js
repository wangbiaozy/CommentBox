import  CommentBox from './CommentBox';
import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
let model = require('./model');
ReactDOM.render(<CommentBox model = {model}/>,document.querySelector('#app'));