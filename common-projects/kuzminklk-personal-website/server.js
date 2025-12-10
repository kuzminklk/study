

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.port || 3500;
const VIEWSPATH = path.join(import.meta.dirname, 'views');

const app = express();

// Build-in middleware
app.use(express.static(path.join(import.meta.dirname, 'public')));

// Routers
app.use(/^\/$/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'index.html'))
});
app.use(/^\/development$/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'development.html'))
});
app.use(/^\/socials$/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'socials.html'))
});
app.use(/^\/photography$/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'photography.html'))
});

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });