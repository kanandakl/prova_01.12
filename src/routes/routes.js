const express = require("express");

const routes = express.Router();

const produtoscontroller = require("../controler/controller");

routes.get("/", (req, res) => res.send(`<h1> amo neymarjr </h1>`));
routes.get("/listingProdutos", produtoscontroller.listingProdutos);
routes.get("/listingProdutos/:id", produtosontroller.listingChooseProdutos);
routes.delete("/deleteProdutos/:id", produtoscontroller.deleteProdutos);
routes.post("/postingProdutos", produtoscontroller.postingProdutos);
routes.put("/updatingProdutos", produtoscontroller.updatingProdutos);
module.exports = routes;