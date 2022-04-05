const express = require("express");
const container = require("../middlewares/container");
const { categories,
     categoriesByGroup,
     createCategory,
     editCategory,
      deleteCategory
 }   = require("../controllers/categories");

const router = express.Router();


router.get("/All", container(categories));
router.get("/All/:groupId", container(categoriesByGroup));
router.post("/Create", container(createCategory));
router.patch("/Edit/:id", container(editCategory));
router.delete("/Delete/:id", container(deleteCategory));



module.exports = router;