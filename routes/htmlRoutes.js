const router = require("express").Router();
const path = require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"))
})

router.get("/agenda", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/agenda.html"))
})

router.get("/speakers", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/speakers.html"))
})

router.get("/faq", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/faq.html"))
})

module.exports = router;