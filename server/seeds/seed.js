const db = require('../config/connection');
const { User, FAQ } = require('../models');
const data = require('./data');

db.once('open', async () => {
  try {
    await FAQ.deleteMany({});
    await FAQ.create(data.faqs);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(data.userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});