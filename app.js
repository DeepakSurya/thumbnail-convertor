var express=require('express');
var app=express();
var upload=require('express-fileupload');
var Jimp = require('jimp');


app.use(upload());

app.get('/', function(req,res){
    res.render('form.ejs');
});

app.get('/edit', function(req,res){

   
    
    });


app.post('/',function(req,res){
    if(req.files){
        console.log(req.files);
        var file=req.files.filename;
        var filename=file.name;
        console.log(filename);
        file.mv('./upload/'+filename,function(err,suc){
            if(err){console.log(err)}else{
                console.log('dome');
            }
        });

        Jimp.read('./upload/'+filename, (err, lenna) => {
            if (err) throw err;
            lenna
              .resize(75, 75) // resize
              .quality(40) // set JPEG quality
              //.greyscale() // set greyscale
              .write('./new/'+filename); // save
          });


    }else{
        console.log('no');
    }
})

app.listen(1010,function(){
    console.log('server on');
});

