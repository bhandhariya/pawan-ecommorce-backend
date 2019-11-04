var Category=require('../models/category_model');

exports.createCategory=function(req,res,next){
    var data=req.body;
    var cat=new Category({
        name:data.category,
        description:data.description,
        createdOn:new Date.now()
    });
    cat.save((err,result)=>{
        if(!err && result){
            res.send(result)
        }else{
            res.send(err)
        }
    })

}

exports.findAllCategory=function(req,res,next){
    Category.find((err,result)=>{
        if(!err && result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}