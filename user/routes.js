const express = require("express");

const routes = express.Router({
    mergeParams: true
})

routes.get("/", (req, res) => {
    res.status(200).send({});
});

// routes.post("/", (req, res) => {
//     res.status(200).send({});
// });

module.exports = {
    routes
};