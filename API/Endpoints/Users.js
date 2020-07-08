'use strict';
const express = require('express');
const fs = require('fs');
const router = express.Router();
router.get('/', (req, res, next) =>{
    res.status('200').json({
        status: 'get'
    });

});

router.post('/', (req, res, next) =>{
    res.status('200').json({
        status: 'post'
    });

});
router.post('/:userinfo', (req, res, next) =>{
    const userinfo = req.params.userinfo;
    
    const info = userinfo.split('|');
    if(info[0] == "null" || info[1] == "null" || info[0] == "" || info[1] == ""){
        res.send("The data that was sent had null in it and was not prossed");
        return;
    }
    res.status('200').json({
            email: info[0],
            name: info[1],
            day: info[2],
            hour: info[3]
    });
    var userdata = {
        userdata: []
    };
    let currentdata = fs.readFileSync('./userdata.json');
    let parsedata = JSON.parse(currentdata);
    console.log((parsedata.userdata).length);
    for(var i = 0; i < (parsedata.userdata).length; i++){
        console.log(parsedata.userdata[i]);
        userdata.userdata.push(parsedata.userdata[i]);
    }



   
    
    userdata.userdata.push({name: info[1], email: info[0], day: info[2], hour: info[3]});
    
    let data = JSON.stringify(userdata, null, 2);
    console.log(userdata);
    //currently there has to be a file already made and have one entry in it like the one in the repository already.
    fs.exists('JSON File directory', function(exists) {
        if(exists){
            fs.writeFileSync('./userdata.json', data);
            
        }else{
            console.log('Error user data dosent exits');
        }

    });
    
});
module.exports = router;

