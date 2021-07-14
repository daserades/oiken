const express = require('express');
const pageController = require("../controllers/pageControllers");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/blog").get(pageController.getBlogPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/courses").get(pageController.getCoursesPage);
router.route("/blog-single").get(pageController.getBlogSinglePage);
router.route("/course").get(pageController.getCourseSingle);
router.route("/404").get(pageController.get404Page);

module.exports = router;