const City=require('../../models/cityModel');

const createCity = async (req, res) => {

    try {
      const {
        name,
      } = req.body;
      const CityName=name;
      const isExist=await City.find({
        name:CityName
      });
      if(isExist.length===0){
        const city = await City.create({
          name,
        });
      console.log("city created", city);
      return res.json({
        status: "ok",
        message: "New City added successfully",
        city,
      })
      }else{
        return res.json({
          status:'fail',
          message:'City is already exist.'
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

  const deleteCity= async(req,res)=>{
    try {
      console.log(req.params.id);
      const cityToDelete= await City.findByIdAndDelete(req.params.id);
      console.log(cityToDelete);
      if(!cityToDelete){
        console.log("Not deleted");
        return res.json({
          status:'fail',
          message:'Sorry,can not Delete the user'
        })
      }
      console.log("Deletd successfully");
      res.json({
        status:'ok',
        message:'City deleted successfully'
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
    createCity,
    deleteCity
  }