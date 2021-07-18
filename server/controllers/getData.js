exports.getData = async (req, res) => {
  const data = {
    header: 'MERN Boilerplate.',
    message: 'This project follows the Airbnb style guide, you can read the style guide',
    link: 'https://github.com/airbnb/javascript',
  }

  res.status(200).json({
    status: 'success', data,
  });
}
