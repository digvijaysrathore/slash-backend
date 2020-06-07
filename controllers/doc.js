const Doc = require("../models/doc");
const uuid = require("uuidv1");

exports.adddoc = (req, res) => {
    const {image, title, summary, body, developer} = req.body
    const dockey = uuid()
    const docs = new Doc({
        image: image,
        title: title,
        summary: summary,
        body: body ,
        developer: developer,
        dockey: dockey
    })
    docs.save((err, docs) => {
        if(err){
            return res.status(400).json({
                err: "Failed to add a new doc!"
            })
        }
        res.json({
            title: docs.title,
            image: docs.image
        })
    })
};

exports.editdoc = (req, res) => {
    Doc.findOneAndUpdate(
        {dockey: req.body.dockey},
        {$set: req.body},
        (err, doc) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to update doc!"
                })
            }
            res.json({
                title: doc.title,
                developer: doc.developer
            })
        }
    )
}

exports.getAll = (req, res) => {
  Doc.find()
    .sort({"_id": -1})
    .exec((err, docs) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to get all docs!"
        });
      }
      res.json(docs);
    });
};

exports.getById = (req, res) => {
    Doc.findOne(
        {dockey: req.body.dockey},
        (err, doc) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to get doc by ID!"
                })
            }
            res.json(doc)
        }
    )
}

exports.comment = (req, res) => {
    Doc.findOneAndUpdate(
        {dockey: req.body.dockey},
        {$push: {comments: req.body.comment}},
        (err, doc) => {
            if(err){
                return res.status(400).json({
                    err: "Failed to comment on the post!"
                })
            }
            res.json({
                title: doc.title,
                comments: doc.comments
            })
        }
    )
};