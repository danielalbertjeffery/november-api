var controllers = require('./controllers/.index');
var actions = require('./actions/.index');

module.exports = function(app) {
  
  // User
  app.route('/users')
    .get(controllers.user.list)
    .post(controllers.user.add);
  app.route('/users/:user_id')
    .get(controllers.user.load)
    .put(controllers.user.update)
    .delete(controllers.user.remove);


  // Task
  app.route('/tasks')
    .get(controllers.task.list)
    .post(controllers.task.add);
  app.route('/tasks/:task_id')
    .get(controllers.task.load)
    .put(controllers.task.update)
    .delete(controllers.task.remove);  

  // Signup
  app.post('/signup', actions.signup);

  // Login
  app.post('/token', actions.login);

  // Follows
  app.route('/follows')
    .get(controllers.follow.list)
    .post(controllers.follow.add);
  app.route('/follows/:follow_id')
    .get(controllers.follow.load)
    .put(controllers.follow.update)
    .delete(controllers.follow.remove);

};