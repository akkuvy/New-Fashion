const { response } = require("express");
const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers");
router.get("/", async (req, res) => {
  await userHelpers.getAllProducts().then((response) => {
     res.send(response)
  });
});
router.post("/add-cart", async (req, res) => {
  const item=req.body;
   await userHelpers.addTocart(item).then((message)=>{
    res.send(message) 
   })
});

router.get("/cart",async(req,res)=>{
await userHelpers.getCartProducts().then((response)=>{
  res.send(response)
})
})

module.exports = router;
