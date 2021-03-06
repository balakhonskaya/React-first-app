import express from 'express';
//const express = require('express');
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';

const app = express();

app.get('/', (req, res) =>{
    res.send(
        ReactDOM.renderToString(Header()),
    );
});

app.listen(3000, () => {
    console.log('Server starts on http://localhost:3000');
});