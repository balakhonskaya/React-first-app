import express from 'express';
//const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Server starts on https//:localhost:3000');
});