const express = require("express");
const router = express.Router();
const books = require("../controllers/books");


router.get(`/`, books.index)
router.get(`/:id`, books.showBook)
router.post(`/`, books.create)
//router.patch(`/`, books.update)







module.exports = router;