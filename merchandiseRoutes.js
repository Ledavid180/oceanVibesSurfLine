const daoClass = require("../../dao/merchandiseDao"); 
const dao = new daoClass();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    dao.findAll(req, res);
});
//FIND BY ID ROUTES ->> /api/merchandise/:id
router.get("/:id", (req, res) => {
    dao.findbyID(req, res, req.params.id);
});

router.post("/update/:id", (req, res) => {
    console.log(req.body);

    //res.json(req.body);
    dao.updateById(req, res);
});

// /api/merchandise/create
router.post("/create", (req, res) => {
    console.log(req.body);

    //res.json(req.body);
    dao.createById(req, res);
});

router.get("/delete/:id", (req, res) => {
    console.log(req.body);

    //res.json(req.body);
    dao.deletebyID(req, res, req.params.id);
});

module.exports = router; 