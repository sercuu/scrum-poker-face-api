var config = {
  development: {
    database: {
      uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@scrumpoker-e7t5p.mongodb.net/test?retryWrites=true&w=majority`
    }
  }
};

module.exports = config;
