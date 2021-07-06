const fs = require("fs")
//Create a File
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File Successfully Created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
//     }
        
// });

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('succesfully renamed the file')
// });

// fs.appendFile('example2.txt',' Some Data Being appended',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(' Succesfullly appended data to the file');
// })

fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully deleted the file');
})