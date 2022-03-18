const express = require("express");
const { categories,
     categoriesByGroup,
     createCategory,
     editCategory,
      deleteCategory
 }   = require("../controllers/categories");

const router = express.Router();


router.get("/All", categories);
router.get("/All/{groupId}", categoriesByGroup);
router.post("/Create", createCategory);
router.post("/Edit", editCategory);
router.post("/Delete/{id}", deleteCategory);



module.exports = router;