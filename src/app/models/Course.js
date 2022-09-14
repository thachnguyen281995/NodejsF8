const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema({
    name:{type : String ,require:true},
    description:{type : String ,maxLength :255},
    image: {type : String ,maxLength :255},
    videoId: {type : String ,maxLength :255},
    level: {type : String ,maxLength :255},
    slug: {type : String ,slug:"name"},
    

    
  });
  module.exports =  mongoose.model('Model', Course,'learn');