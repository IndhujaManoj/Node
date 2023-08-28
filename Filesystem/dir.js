const fs=require('fs')

/* if there is same file name then delete it */


if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err) throw err
        console.log('directry created')
    })
    
    }
/* if thre is no same file then create new file */

    if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{ 
        if(err) throw err
        console.log('directry created')
    })
    
    }
    
/* Exit From Error  */

   process.on("uncaughtException",err=>{
     console.log('UncaughtError',`${err}`)
     process.exit(1)
  })