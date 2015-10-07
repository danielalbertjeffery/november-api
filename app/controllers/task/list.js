module.exports = function(req, res, render) {

  req.models.task
  .findAll()
  .then(function(tasks) {
    render(tasks);
  })
  .catch(function(err) {
    render(err);
  });

};