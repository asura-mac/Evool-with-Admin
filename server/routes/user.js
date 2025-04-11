const router = require("express").Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/ImageUpload");
//sign-up api

router.post("/sign-up", userController.signupUser);

//log-in
router.post("/log-in", userController.loginUser);

//check cookie
router.get("/check-cookie", userController.checkCookie);

//logout
router.post("/logout", userController.logout);

router.get(
  "/getProfileData",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.getProfileData
);

router.put(
  "/changeUserPassword",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.changeUserPassword
);

//change Avatar
router.put(
  "/changeAvatar",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  upload.single("image"),
  userController.changeAvatar
);

//getFavouriteBlogsOfAUser
router.get(
  "/getFavouriteBlogsOfAUser",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.getFavouriteBlogsOfAUser
);
module.exports = router;
