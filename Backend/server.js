const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const scrapeRoutes = require('./routes/scrapeRoutes');
const scrapeStories = require('./services/scraperService');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api', scrapeRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('MongoDB Connected');

    // Run scraper automatically
    await scrapeStories();

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch(err => console.log(err));