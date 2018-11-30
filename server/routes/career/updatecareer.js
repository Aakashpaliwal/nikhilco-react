var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add career page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
  console.log(req.body);
  req.check('profile','invalid career profile').isLength({min:1,max:100});
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var career = 
    {
      profile:req.body.profile,
      description:req.body.desc,
      createdby:req.session.adminid
    };
    con.query("update career SET ? where career_id=? and status=1 ;",[career,req.body.id],function(err,careerresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(careerresult["affectedRows"]==1)
        res.json({"success":true,'msg':'career updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});  
      }
    });
  }		   
});


module.exports = router;