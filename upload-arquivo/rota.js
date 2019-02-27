'use strict';
module.exports = function(app) {


    /*var awsCtrl = require('./awsController.js');    

    app.route('/sign-s3')
        .get(awsCtrl.gerar_assinatura);
        
    app.route('/upload-arquivo')
        .post(awsCtrl.uploadArquivo);*/

  
    var express = require('express');
    var router = express.Router(); 

    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'public/images/uploads')
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + file.mimetype.toString().replace('image/', '.') );
        }
    });

    var upload = multer({storage: storage});

    router.post('/fileUpload', upload.single('image'), (req, res, next) => {
        console.log(req.file.filename);
        res.json({'message': 'File uploaded successfully'});
    });

    app.use('/leitura', router);

};