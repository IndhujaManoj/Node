
const path = require('path');
const fsPromise = require('fs').promises
const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8')
    console.log(data, "datas")
    await fsPromise.writeFile(path.join(__dirname, 'files', 'write.txt'), 'Hi I am The New Text File');
    console.log('write complete')
    await fsPromise.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n \n Thank you')
    console.log('Update completed')

    fsPromise.rename(path.join(__dirname,'files','write.txt'),(path.join(__dirname,'files','rename.txt')))
    console.log('Rename completed')
  
     await fsPromise.unlink(path.join(__dirname, 'files', 'start.txt'))

  } catch (err) {
    console.error(err)
  }
}
fileOps()

 /* Exit From Error  */

   process.on("uncaughtException",err=>{
     console.log('UncaughtError',`${err}`)
     process.exit(1)
  })



