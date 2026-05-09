const scrapeStories = require('../services/scraperService');

exports.runScraper = async (req, res) => {
    try {

        await scrapeStories();

        res.json({
            message: 'Scraping completed successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};