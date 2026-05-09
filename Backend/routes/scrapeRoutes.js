const express = require('express');

const router = express.Router();

const {
    runScraper
} = require('../controllers/scrapeController');

router.post('/scrape', runScraper);

module.exports = router;