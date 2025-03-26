
const express = require('express');
const path = require('path')
const basicSever = express();

basicSever.get('/page', (req, res) => {
    const pageName = req.query.name;

    if(pageName === 'index') {
        res.sendFile(path.join(__dirname, 'index.html'))
    } else if (pageName === 'about') {
        res.sendFile(path.join(__dirname, 'about.html'))
    } else if (pageName === 'contact-me'){
        res.sendFile(path.join(__dirname, 'contact-me.html'))
    } else {
        res.sendFile(path.join(__dirname, '404.html'));
    }
});

basicSever.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})
