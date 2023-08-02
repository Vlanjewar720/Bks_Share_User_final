const {visualization} = require('../model/Schema')
const csv = require("csvtojson")
exports.importUser =  async (req,res)=>{
  try{

    var visualization1 = []
    csv()
    .fromFile(req.file.path)
    .then(async(response)=>{
      // console.log(response)
      for(var x=0; x < response.length; x++) {
        visualization1.push({
          BuyBook:response[x].BuyBook,
          SellBook:response[x].SellBook,
          DonateBook:response[x].DonateBook,
          Month:response[x].Month
        });
      }
      await visualization.insertMany(visualization1);
    })

    res.send({status:200, success:true, msg:'runnig'})
  }catch(error){
    res.send({status:400, success:false, msg:error.message})
    
  }
}


exports.getData = async(req, res) => {
  try {
      const users = await visualization.find();
      res.send(users);
    } catch (error) {
      res.status(400).send(error);
    }
}