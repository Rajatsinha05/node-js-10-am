
const fs = require('fs');
let opr = process.argv[2];
let filename = process.argv[3];
let data = process.argv[4];


const createFile = () => {

    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(filename, "file written successfully");
        }
    })
}

if(opr=="create"){
    createFile();
}


// fs.writeFile("index.txt", "testing", (err) => {
//     if (err) {
//         console.log(err.message);
//     }
//     else {
//         console.log("file written successfully");
//     }
// })

// fs.readFile("index.txtt", "utf-8", (err, data) => {

//     if (err) {
//         console.log(err.message);

//     }
//     else {
//         console.log(data);

//     }
// })

// fs.rename("index.txt", "index.html",err=>{
//     if(err){
//         console.log(err.message);

//     }
//     else{
//         console.log("file renamed successfully");

//     }
// })


// fs.appendFile("index.txt","\n node",(err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("data added");

//     }
// })

// fs.unlink("index.txt", (err) => {
//     if (err) {
//         console.log(err);

//     }
//     else {
//         console.log("file deleted");

//     }
// })