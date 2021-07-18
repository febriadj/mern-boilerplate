const { connect } = require('mongoose');
const config = require('./config');

module.exports = async () => {
  try {
    await connect(config.uri, config.options);
    console.log('MongoDB Connected');
  }
  catch (err) {
    console.error(err);
  }
}
