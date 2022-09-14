class NewsController {
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send('HEllo!!!')
    }
}
module.exports = new NewsController;