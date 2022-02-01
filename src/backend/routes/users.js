const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const newUser = new User({ name, age });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/delete').delete((req, res) => {
  User.deleteOne({ _id: req.query.myID }).then((res) => {
    console.log(req);
    console.log('User  Deleted !');
  });
  console.log('yeo!');
  res.status(200).json;
});

// router.route('/delete/:id').delete((req, res) => {
//   User.deleteOne({ _id: req.params.id }).then((res) => {
//     console.log('User Deleted!');
//   });
//   console.log("yeo!");
//   res.status(200).json;
// });

// eine weitere Option:
// router.delete('/delete/:id', ((req, res) => {
//   User.deleteOne({ _id: req.params.id }).then(() => {
//     console.log('User Deleted!');
//   });
//   console.log(res);
// }));

module.exports = router;
