const BLOG = require("../models/blog");
const USER = require("../models/user");
const jwt = require("jsonwebtoken");

//fetch all blogs

exports.fetchAllBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//fetch recent blogs

exports.fetchRecentBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.find().sort({ createdAt: -1 }).limit(4);
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//get description by id
exports.getDescById = async (req, res) => {
  try {
    const token = req.cookies.blogsapptcm;
    let user = null;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Fetch user details if the token is valid
        user = await USER.findById(decoded.id);
      } catch (err) {
        // If token verification fails, proceed without fetching the user
        console.log("Invalid token or error verifying token");
      }
    }

    const { id } = req.params;
    const blog = await BLOG.findById(id);

    if (!blog) {
      return res.status(400).json({ error: "No blog found" });
    }

    // Check if the user has favorited the blog
    let favourite = false;
    if (user && blog.favouriteBlogByUsers.includes(user._id)) {
      favourite = true;
    }

    res.status(200).json({ success: true, blog, favourite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//add Blogs To Favourite
exports.addBlogsToFavourite = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const blog = await BLOG.findById(id);
    const existinguser = await USER.findById(user._id);
    if (!blog) {
      res.status(400).json({ error: "No blog found" });
    }
    blog.favouriteBlogByUsers.push(user._id);
    existinguser.favouriteBlogs.push(id);
    await blog.save();
    await existinguser.save();
    res
      .status(200)
      .json({ success: true, message: "Blog added to favourites" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//remove blog from favourites
exports.removeBlogsFromFavourite = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const blog = await BLOG.findById(id);
    const existinguser = await USER.findById(user._id);
    if (!blog) {
      res.status(400).json({ error: "No blog found" });
    }

    const userFavouriteIndex = existinguser.favouriteBlogs.indexOf(id);
    if (userFavouriteIndex !== -1) {
      existinguser.favouriteBlogs.splice(userFavouriteIndex, 1);
    } else {
      return res
        .status(400)
        .json({ error: "Blog is not in user's favourites" });
    }

    const blogFavouriteIndex = blog.favouriteBlogByUsers.indexOf(user._id);
    if (blogFavouriteIndex !== -1) {
      blog.favouriteBlogByUsers.splice(blogFavouriteIndex, 1);
    }

    await blog.save();
    await existinguser.save();
    res
      .status(200)
      .json({ success: true, message: "Blog removed from favourites" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//edit a particular blog
exports.editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await BLOG.findByIdAndUpdate(id, { title, description });
    res.status(200).json({ success: true, message: "Blog updated" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//delete a particular blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await BLOG.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
