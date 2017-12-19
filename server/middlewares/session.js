module.exports = (req,res,next)=>{
    if(!req.body.user) {
        req.body.user = {
            messages:[]
        }
    }
    next()
}