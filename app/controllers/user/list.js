module.exports = function(req, res, render) {

  var findQuery;

  if (req.query.me && !req.user) {
    return render("Go suck a sour lolly!");
  }

  if (req.query.me) { 
    findQuery = {
      where: { id: req.user },
      include: [
        req.models.task,
      ]
    }
  }

  if (req.query.username) {
    findQuery = {
      where: { username: req.query.username },
      include: [
        req.models.task,
      ]
    }
  }

  req.models.user
  .findAll(findQuery)
  .then(function(users) {
    render(users);
  })
  .catch(function(err) {
    render(err);
  });

};