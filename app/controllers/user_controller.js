const userSchema = require("./schemas/user_schema")




async function signUp(req, res){
    try {
        const body = userSchema.validate(req.body);
        console.log("validation result :> ",body);
        res.json(body);
    } catch (error) {
        console.log("Error :> ",error);
        res.json("error : "+error)
        
    }
}

const userController = {
    signUp
}
module.exports = userController