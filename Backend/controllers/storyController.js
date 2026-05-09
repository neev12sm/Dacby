

const Story = require('../models/Story');
const User = require('../models/User');

exports.getStories = async (req, res) => {

    try {

        const stories = await Story.find()
            .sort({ points: -1 });

        res.json(stories);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


exports.getSingleStory = async (req, res) => {

    try {

        const story = await Story.findById(
            req.params.id
        );

        res.json(story);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


exports.toggleBookmark = async (req, res) => {

    try {

        const user = await User.findById(
            req.user.id
        );

        const storyId = req.params.id;

        const exists =
            user.bookmarks.includes(storyId);

        if (exists) {

            user.bookmarks =
                user.bookmarks.filter(
                    id => id.toString() !== storyId
                );

        } else {

            user.bookmarks.push(storyId);
        }

        await user.save();

        res.json({
            bookmarks: user.bookmarks
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


exports.getBookmarks = async (req, res) => {

    try {

        const user = await User.findById(
            req.user.id
        ).populate('bookmarks');

        res.json(user.bookmarks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};