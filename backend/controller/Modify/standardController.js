const Stand=require('../../models/standModel');
const createStand = async (req, res) => {
    try {
      const {
        name,
      } = req.body;
      const StandName=name;
      const isExist=await Stand.find({
        name:StandName
      });
      if(isExist.length===0){
        const stand = await Stand.create({
          name,
        });
      console.log("Subject created", stand);
      return res.json({
        status: "ok",
        message: "New Standard is added successfully",
        stand,
      })
      }else{
        return res.json({
          status:'fail',
          message:'Standard is already exist.'
        })
      }
    } catch (error) {
      console.log("Something Error", error);
      res.json({
        status: "fail",
        message: "Can not create the Standard due to internal reason",
      });
    }
  };

  const deleteStand= async(req,res)=>{
    try {
      console.log(req.params.id);
      const standToDelete= await Stand.findByIdAndDelete(req.params.id);
      console.log(standToDelete);
      if(!standToDelete){
        console.log("Not deleted");
        return res.json({
          status:'fail',
          message:'Sorry,can not Delete the Standard'
        })
      }
      console.log("Deletd successfully");
      res.json({
        status:'ok',
        message:'Standard deleted successfully'
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
    createStand,
    deleteStand
  }