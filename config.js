var config = {
  development: {
    database: {
      uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@scrumpoker-e7t5p.mongodb.net/scrumpoker?retryWrites=true&w=majority`
    },
    secret: process.env.JWT_KEY
  }
};

module.exports = config;
