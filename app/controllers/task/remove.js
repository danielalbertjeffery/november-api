module.exports = function(req, res, render) {

  req.models.task.find({
    where: {
      id: req.params.task_id 
    } 
  })
  .then(function(task) {
    return task.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};