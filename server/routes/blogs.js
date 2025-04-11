const router = require("express").Router();
const BlogsController = require("../controller/blogsController");
const authMiddleware = require("../middlewares/authMiddleware");
//fetchAllBlogs
router.get("/fetchAllBlogs", BlogsController.fetchAllBlogs);

//fetchRecentBlogs
router.get("/fetchRecentBlogs", BlogsController.fetchRecentBlogs);

//getDescById
router.get("/getDescById/:id", BlogsController.getDescById);

//addBlogsToFavourite
router.put(
  "/addBlogsToFavourite/:id",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  BlogsController.addBlogsToFavourite
);

//removeBlogsFromFavourite
router.put(
  "/removeBlogsFromFavourite/:id",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  BlogsController.removeBlogsFromFavourite
);

//edit a blog
router.put(
  "/editBlog/:id",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("admin"),
  BlogsController.editBlog
);

//deleteBlog
router.put(
  "/deleteBlog/:id",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("admin"),
  BlogsController.deleteBlog
);
module.exports = router;
