module.exports = function(req, res, render) {

  req.models.task.find({
    where: {
      id: req.params.task_id 
    }
  })
  .then(function(task) {
    
    /*
     * Set new values like this:
     * task.some_field_name = req.body.task.someFieldName;
     */
     
    return task.save();
  })
  .then(function(task) {
    render(task);
  })
  .catch(function(err) {
    render(err);
  });

};