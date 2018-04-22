module.exports = function(app) {
  console.log('urlNotFound');
  return function raiseUrlNotFoundError(req, res, next) {
    var options = {
      root: __dirname + '../../../client/',
    };

    res.sendFile('index.html', options, function(err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
    });
  };
};
