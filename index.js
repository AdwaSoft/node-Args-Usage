const fs = require('fs')

const args = require('yargs').argv;


fs.readFile('allFileName.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data, 'able to read the data successfully');
        const fileArray = data.split('\n')
         if(fileArray.indexOf(args.filename)=== -1){
            fs.writeFile(''+args.filename+'.txt',"first write",(err)=>{
                if(err){
                    console.log(err)
                }else{
                    fs.appendFileSync('allFileName.txt',args.filename+'\n');
                    console.log("filename appended successfully")
                }
            })
         }else{
            console.log("filename is already present")
         }
    }
})