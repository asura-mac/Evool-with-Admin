const User = require("../models/user");
const Category = require("../models/category");
const Blog = require("../models/blog");

exports.addCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const checkCat = await Category.findOne({ title });

    if (checkCat) {
      return res.staus(400).json({ error: "Category already exists" });
    }

    const newCat = new Category({ title });
    await newCat.save();
    return res.status(200).json({ success: true, message: "Category added" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, error: "Internal server error" });
  }
};

//getCatrgories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ success: true, categories });
  } catch (error) {
    //console.log(error);
    return res
      .status(400)
      .json({ success: false, error: "Internal server error" });
  }
};

//get blogs by category
exports.getCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate("blogs");
    return res.status(200).json({ success: true, blogs: category.blogs });
  } catch (error) {
    //console.log(error);
    return res
      .status(400)
      .json({ success: false, error: "Internal server error" });
  }
};
