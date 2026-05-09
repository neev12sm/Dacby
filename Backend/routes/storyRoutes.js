

const express = require("express");

const router = express.Router();

const {
    getStories,
    getSingleStory,
    toggleBookmark,
    getBookmarks,
} = require("../controllers/storyController");

const authMiddleware =
    require("../middleware/authMiddleware");


// Get all stories
router.get("/", getStories);


// Get bookmarked stories
router.get(
    "/bookmarks",
    authMiddleware,
    getBookmarks
);


// Get single story
router.get("/:id", getSingleStory);


// Add / Remove bookmark
router.post(
    "/:id/bookmark",
    authMiddleware,
    toggleBookmark
);


module.exports = router;