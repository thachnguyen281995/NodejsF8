const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
    index(req, res, next) {
        // Course.find({}, function (err,learn) {
        //     if (!err) {
        //         res.json(learn)
        //     } else {
        //         res.status(400).json({ error: "Error!!" });
        //     }
        // });
        Course.find({})
            .then((learn) => {
                res.render("home", {
                    learn: mutipleMongooseToObject(learn),
                });
            })
            .catch(next);
        // res.render('home')
    }
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
