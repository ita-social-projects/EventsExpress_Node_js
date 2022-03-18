const Category = require("../models/categories");
const {db} = require ('../databaseSetup');
const {DataTypes} = require ('sequelize');


 const categories = async (req, res) => {
  const result = await Category(db, DataTypes).findAll();
  res.status(201).json({ result });
   
};

// TODO feat controllers

const categoriesByGroup = async (req, res) => {
   
  const result = await Category(db, DataTypes).findAll({
    where: {
        id: req.params.id
    }
});
  res.status(201).json({ result });
};

const createCategory = async (req, res) => {
    
  const result = await Category(db, DataTypes).create(req.body);
  res.status(201).json({ result });
    
};

const editCategory = async (req, res) => {
const result = await Category(db, DataTypes).update(req.body, {
    where: {
        id: req.params.id
    }
});
  res.status(201).json({ result });
    };

const deleteCategory = async (req, res) => {
    const result = await Category(db, DataTypes).destroy({
    where: {
        id: req.params.id
    }
});
  res.status(201).json({ result });
};


module.exports =  {categories, categoriesByGroup,  createCategory, editCategory, deleteCategory } ;
