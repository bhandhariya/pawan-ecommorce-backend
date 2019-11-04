var Category=require('../models/category_model');

exports.createCategory=function(req,res,next){
    var data=req.body;
    var cat=new Category({
        name:data.category,
        description:data.description,
        createdOn:Date.now()
    });
    cat.save((err,result)=>{
        if(!err && result){
            return res.send(result)
        }else{
            return res.send(err)
        }
    })

}

exports.findAllCategory=function(req,res,next){
    Category.find((err,result)=>{
        if(!err && result){
            return res.send(result)
        }else{
            return res.send(err)
        }
    })
}

exports.deletbyID=function(req,res,next){
    Category.findByIdAndDelete(req.body.id).exec((err,result)=>{
        if(!err && result){
            return res.send(result)
        }else{
            return res.send(err)
        }
    })
}