console.log('hello world')

const os=require('os')
console.log("os",os.type())
console.log("os",os.version())
console.log("os",os.homedir())

const path=require('path')
console.log("path", path.dirname(__filename))

/* default values */

console.log(__filename)
console.log(__dirname)

const math=require('./math')
console.log(
    math.add(40,20),
    math.sub(40,20),
    math.mul(40,20),
    math.div(40,20)


    )
