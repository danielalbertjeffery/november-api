module.exports = function(req, res, render) {


  if (!req.body.task) {
    return render("You need to specify a task object!");
  }

  if (!req.user) {
    return render("You need to be logged in to post!");
  }

  req.body.task.user_id = req.user;  

  req.models.task
  .create(req.body.task)
  .then(function(task) {
    render(task);
  })
  .catch(function(err) {
    render(err);
  });

};