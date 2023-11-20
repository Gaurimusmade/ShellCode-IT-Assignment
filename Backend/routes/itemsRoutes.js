const express=require('express');
const { getitems,postitems,deleteitems,deleteall} = require('../controller/itemsController');
const router=express.Router();


router.route("/").get(getitems);

router.route("/").post(postitems);

router.route("/:id").delete(deleteitems);

router.route("/").delete(deleteall);
module.exports=router;