const db = require('../config/connection');
const { User, FAQ, Animal, AnimalType } = require('../models');
const data = require('./data');

db.once('open', async () => {
  try {
    await Animal.deleteMany({});
    await User.deleteMany({});
    await FAQ.deleteMany({});
    await AnimalType.deleteMany({});

    await Animal.create(data.animals);
    await User.create(data.userSeeds);
    await FAQ.create(data.faqs);
    await AnimalType.create(data.animalTypes);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});