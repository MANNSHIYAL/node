// const abc = 123
// console.log(`Hey ${abc}`)
// const names = require('./module')
// console.log(names)
// console.log(names.myname)
// console.log(names.number)
const os = require('os')
// console.log(os.userInfo())
// console.log(os.uptime())
// const currentUser = {
//     user : os.type(),
//     release: os.release(), 
//     totalMem : os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentUser)
// require('path')

// const {readFileSync,writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');
// console.log(first)
// console.log(second)
// writeFileSync('./content/result.txt',`Here are two file contents: ${first} , ${second}.\nThese are the contents of te two files`)


// const {readFile,writeFile} = require('fs');
// const { log } = require('console');
// readFile('./content/first.txt','utf8',(error,result)=>{
//     if(error){
//         console.log(error)
//     }
//     const first = result
//     readFile('./content/second.txt','utf8',(error,result)=>{
//         if(error){
//             console.log(error)
//         }   
//         const second = result
//         writeFile('./content/resultset.txt',`Heres the new result: ${first} and ${second}`,(error,result)=>{
//             if(error){
//                 console.log(error)
//             }
//             console.log(result)
//         })
//     })
// })



// const http = require('http')
// const server = http.createServer((request,response)=>{
//     if(request.url === '/'){
//         response.end('Welcome to our home page')
//     }
//     if(request.url === '/about'){
//         response.end('Here is our history')
//     }
//     if(request.url !== '/' && request.url !== '/about'){
//         response.end(`
//         <h1>Error 404</h1>
//         <p>Page not found</p>
//         <a href="/">Back to home</a>`)
//     }
//     // response.write('Welcome to our home page')
//     // response.end()
// })
// server.listen(2003)
