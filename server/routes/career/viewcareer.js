var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{         
  con.query("select * from career where status=1 and createdby=?",[req.session.adminid],function(err,careerresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all career list','careerdata':careerresult});    
    }      
  });           
});
module.exports = router;