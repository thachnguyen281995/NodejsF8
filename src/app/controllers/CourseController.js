const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
    show(req, res,next) {
        Course.findOne({ slug: req.params.slug })
        .then(learn => {
            res.render('./courses/show',{learn:mongooseToObject(learn)});
        
        })
        .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create')
    }
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        // formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        formData.image = `${req.body.image}`
        const course = new Course(formData);
        course.save()
        .then(()=>res.redirect('/'))
        .catch(err =>{

        })
    }
}
module.exports = new CourseController();
