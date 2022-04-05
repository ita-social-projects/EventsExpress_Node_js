const createCategoryModel = require("eventsexpressdb_bylesia/lib/models/categories");
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


// TODO feat controllers
const createCategory = async (req, res) => {
    
  const result = await Category.create(req.body);
  res.status(201).json(result);
    
};

const editCategory = async (req, res) => {
const result = await Category.update(req.body, {
    where: {
        id: req.params.id
    }
});
  res.status(201).json(result);
    };

const deleteCategory = async (req, res) => {
    const result = await Category.destroy({
    where: {
        id: req.params.id
    }
});
  res.status(201).json(result);
};


module.exports =  {categories, categoriesByGroup,  createCategory, editCategory, deleteCategory } ;
