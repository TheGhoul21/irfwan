/**
 * Created by root on 07/09/16.
 */
// load the things we need
var express = require('express');
var app = express();
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ExampleComponent from '../view/components/ExampleComponent';
import {version} from '../../configuration/package';
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../view/pages');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  let string = ReactDOMServer.renderToString(<ExampleComponent />);

  res.render('../pages/index', {
    content:string,
    version
  });
});

app.listen(8085);
console.log('8085 is the magic port');