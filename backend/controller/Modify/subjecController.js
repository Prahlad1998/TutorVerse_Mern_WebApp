const Sub=require('../../models/subModel');
const createSub = async (req, res) => {
    try {
      const {
        name,
      } = req.body;
      const SubName=name;
      const isExist=await Sub.find({
        name:SubName
      });
      if(isExist.length===0){
        const sub = await Sub.create({
          name,
        });
      console.log("Subject created", sub);
      return res.json({
        status: "ok",
        message: "New Subject added successfully",
        sub,
      })
      }else{
        return res.json({
          status:'fail',
          message:'Subject is already exist.'
        })
      }
    } catch (error) {
      console.log("Something Error", error);
      res.json({
        status: "fail",
        message: "Can not create the city due to internal reason",
      });
    }
  };

  const deleteSub= async(req,res)=>{
    try {
      console.log(req.params.id);
      const subToDelete= await Sub.findByIdAndDelete(req.params.id);
      console.log(subToDelete);
      if(!subToDelete){
        console.log("Not deleted");
        return res.json({
          status:'fail',
          message:'Sorry,can not Delete the Subject'
        })
      }
      console.log("Deletd successfully");
      res.json({
        status:'ok',
        message:'Subject deleted successfully'
      })
      
    } catch (error) {
      console.log(error);
      res.json({
        status:'fail',
        message:'Internal Error'
      })
    }
  }
  module.exports={
    createSub,
    deleteSub
  }