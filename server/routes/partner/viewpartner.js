var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{         
  con.query("select * from partner where partner_status=1",req.session.adminid,function(err,partnerresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false,'msg':'something went wrong'});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all partner list','partnerdata':partnerresult});    
    }      
  });           
});
module.exports = router;