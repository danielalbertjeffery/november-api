module.exports = function(req, res, render) {

  req.models.task.find({
    where: {
      id: req.params.task_id 
    }
  })
  .then(function(task) {
    render({
      model: task
    });
  })
  .catch(function(err) {
    render(err);
  });

};