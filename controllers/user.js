const User = require("../models/user");

exports.adduser = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: "Failed to add a new user!"
            })
        }
        res.json({
            name: user.name,
            email: user.email
        })
    })
};

exports.edituser = (req, res) => {
    User.findOneAndUpdate(
        {userkey: req.body.userkey},
        {$set: req.body},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to edit user!"
                })
            }
            res.json({
                name: user.name,
                email: user.email
            })
        }
    )
};

exports.getById = (req, res) => {
    User.findOne(
        {userkey: req.body.userkey},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to get user by ID!"
                })
            }
            res.json(user)
        }
    )
}

exports.getByEmail = (req, res) => {
    User.findOne(
        {email: req.body.email},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to get user by ID!"
                })
            }
            res.json(user)
        }
    )
}

exports.getAll = (req, res) => {
    User.find()
      .sort({"_id": -1})
      .exec((err, users) => {
        if (err) {
          return res.status(400).json({
            error: "Failed to get all docs!"
          });
        }
        res.json(users);
      });
  };

exports.upvoteuser = (req, res) => {
    User.findOneAndUpdate(
        {userkey: req.body.userkey},
        {$inc: {upvote: 1}},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to upvote user!"
                })
            }
            res.json({
                name: user.name,
                email: user.email
            })
        }
    )
};