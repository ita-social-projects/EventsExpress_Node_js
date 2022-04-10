const createCategoryModel = require("../models/categories");
const {db} = require ('../databaseSetup');
const {DataTypes} = require ('sequelize');


const Category = createCategoryModel(db, DataTypes)


 const categories = async (req, res) => {
  const result = await Category.findAll();
  res.status(201).json(result);
   
};


const categoriesByGroup = async (req, res) => {
  const result = await Category.findAll({
        where: {
        categoryGroupId: req.params.groupId
    },
});
  res.status(201).json(result);
};

const createCategory = async (req, res) => {
    
 await Category.create(req.body);
  res.json({
    message: 'Category Created',
  });
    
};

const editCategory = async (req, res) => {
 await Category.update(req.body, {
    where: {
        id: req.params.id
    }
});
res.json({
  message: 'Category Edited',
});
    };

const deleteCategory = async (req, res) => {
   await Category.destroy({
    where: {
        id: req.params.id
    }
});
res.json({
  message: 'Category Deleted',
});
};


module.exports =  {categories, categoriesByGroup,  createCategory, editCategory, deleteCategory } ;
