const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get("/", (req, res)=>{
    const params = {};
    res.status(200).render("home.pug", params);
});
app.get("/award", (req, res)=>{
    const params = {};
    res.status(200).render("award.pug", params);
});
app.get("/about", (req, res)=>{
    const params = {};
    res.status(200).render("about.pug", params);
});
app.get("/special", (req, res)=>{
    const params = {};
    res.status(200).render("special.pug", params);
});
app.get("/menu", (req, res)=>{
    const params = {};
    res.status(200).render("menu.pug", params);
});
app.get("/lunch", (req, res)=>{
    const params = {};
    res.status(200).render("lunch.pug", params);
});
app.get("/soup", (req, res)=>{
    const params = {};
    res.status(200).render("soup.pug", params);
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});