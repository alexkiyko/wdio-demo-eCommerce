import faker from 'faker';

const email = {
  random: faker.internet.email(),
  invalid: faker.internet.email().replace(/@/, ''),
  registered: 'testemail@gmail.com',
};

module.exports = { email };
