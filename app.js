const fs = require('fs');
const mime = require('mime');
const request = require('request');
const dotenv = require('dotenv').config();
const qs = require('qs');
const filesFolder = "./tmp"; //Folder name from which we want to upload
const onedrive_folder = 'Invoices'; // Folder name on OneDrive

(async ()=>{
  fs.readdir(filesFolder , (err,files) => {
    if(err){
      cosnole.log(err);
    }
    files.forEach((file) => {
      let onedrive_filename = `${file}`; // Name for this file tha you want in OneDrive

      request.post({
        url: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
        form: {
                client_id: process.env.CLIENT_ID,
                scope: process.env.SCOPE,
                refresh_token: process.env.REFRESH_TOKEN,
                redirect_uri: process.env.REDIRECT_URI,
                grant_type: "refresh_token",
                client_secret: process.env.CLIENT_SECRET,
        },
      }, function(error, response, body) {
        fs.readFile(file, function read(e, f) {
            request.put({
                url: 'https://graph.microsoft.com/v1.0/me/drive/root:/' + onedrive_folder + '/' + onedrive_filename + ':/content',
                headers: {
                    'Authorization': "Bearer " + JSON.parse(body).access_token,
                    'Content-Type': mime.getType(file), // When you use old version, please modify this to "mime.lookup(file)",
                },
                body: f,
            }, function(er, re, bo) {
                console.log({message : `File ${file} uploaded...`});
                if(er) console.log(er);
            });
        });
      });
    });
  });
})();
