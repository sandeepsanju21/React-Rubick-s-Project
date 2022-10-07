const TableModel = require("../model/TableModel");

module.exports.getToDo = async (req, res) => {
    const todo = await TableModel.find();
    res.send(todo);
}


module.exports.add= async(req,res)=>{
   


    let product = new TableModel({
        Code:req.body.Code,
        Name:req.body.Name,
        Qty:req.body.Qty,
        Price:req.body.Price,
        Date:req.body.Date,
        Tags:req.body.Tags
        
    })
    result=await product.save().then(product=>{
       res.send(product);
   })
}